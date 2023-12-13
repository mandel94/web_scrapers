import scrapy
from scrapy.spiders import XMLFeedSpider
from scrapy.loader import ItemLoader
from items import NewsItem
from scrapy.loader.processors import MapCompose
from scrapy.loader.processors import Join


class ThevergeNewsLoader(ItemLoader):
    default_item_class = NewsItem

    default_input_processor = MapCompose(lambda s: s.strip(), str.lower) 

    # Define default output processor
    default_output_processor = Join()
    # The output of author is a list, so we need to join it using comma separator
    


class ThevergeSpider(scrapy.Spider):

    name = "theverge"
    allowed_domains = ["theverge.com"]
    start_urls = ("https://www.theverge.com/rss/index.xml",)
    # define Atom namespaces
    namespaces = [('atom', 'http://www.w3.org/2005/Atom')]

    custom_settings = {
        'LOG_LEVEL': 'INFO',  # Set the log level to INFO or higher
    }

    def parse(self, response):
        # parse the Atom feed
        for node in response.xpath('//atom:entry', namespaces=self.namespaces):

            # assign title
            title = node.xpath('atom:title/text()', namespaces=self.namespaces).get()

            # assign other variables using node selector with namespaces
            date = node.xpath('atom:published/text()', namespaces=self.namespaces).get()
            #------------------------------------------------------------------
            description = node.xpath('atom:content/text()', namespaces=self.namespaces).get()
            # Remove line breaks from description
            description = description.replace('\n', ' ')
            # Create selector from description
            description_selector = scrapy.Selector(text=description)
            # Extract text from description_selector
            description = description_selector.xpath('//text()').getall()
            #------------------------------------------------------------------
            author = node.xpath('atom:author/atom:name/text()', namespaces=self.namespaces).getall()
            # Double backward slashed is fundamental to get the author correctly, 
            # otherwise it will return None
            #------------------------------------------------------------------
            url = node.xpath('atom:link/@href', namespaces=self.namespaces).get()
            
            loader = ThevergeNewsLoader(selector=node)
            loader.add_value('title', title)
            loader.add_value('date', date)
            loader.add_value('description', description)
            loader.add_value('url', url)
            loader.add_value('author', author)
            loader.add_value('source', 'The Verge')
            # Get article url to parse the whole article
            article_url = node.xpath('atom:link/@href', namespaces=self.namespaces).get()
            # Create request to parse the whole article
            yield scrapy.Request(article_url, callback=self.parse_page, meta={'loader': loader})

    def parse_page(self, response):
        # log url to make sure it was extracted
        loader = response.meta['loader']
        #TODO: DOS NOT SCRAPE THE WHOLE ARTICLE
        body = response.xpath('//p/text()').getall()
        loader.add_value('body', body)
        #Log length of body
        return loader.load_item()
    
