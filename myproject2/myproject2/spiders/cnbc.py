import scrapy
from scrapy.spiders import XMLFeedSpider
from scrapy.loader import ItemLoader
from items import NewsItem
from scrapy.loader.processors import MapCompose
from scrapy.loader.processors import Join



class CNBCNewsLoader(ItemLoader):

    default_item_class = NewsItem

    default_input_processor = MapCompose(lambda s: s.strip(), str.lower) 

    # Define default output processor
    default_output_processor = Join()
    # The output of author is a list, so we need to join it using comma separator
    author_out = Join(separator=', ')


class CnbcSpider(XMLFeedSpider):
    name = "cnbc"
    allowed_domains = ["search.cnbc.com", "www.cnbc.com"]
    start_urls = ["https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=19854910"]
    iterator = "iternodes"  # you can change this; see the docs
    itertag = "item"  # change it accordingly

    # Set log level
    custom_settings = {
        'LOG_LEVEL': 'INFO',  # Set the log level to INFO or higher
    }

    def parse_page(self, response):
        loader = response.meta['loader']
        # Bind loader tp
        # response.xpath('author', '//a[@class="Author-authorName"]/text()')
        #Get author from response
        author = response.xpath('//a[@class="Author-authorName"]/text()').getall()
        body = response.xpath('//div[@class="group"]/p/text()')
        loader.add_value('author', author)
        self.logger.info('Body: %s', body)
        return loader.load_item()

    def parse_node(self, response, node):
        #use iteam loader to populate the item fields
        loader = CNBCNewsLoader(selector=node)
        #print out loader selector
        pubDate = node.xpath('pubDate/text()').extract_first()
        description = node.xpath('description/text()').extract_first()
        self.logger.info("Description: %s", description)
        url = node.xpath('link/text()').extract_first()
        

        loader.add_value('date', pubDate)
        loader.add_value('description', description)
        loader.add_value('url', url)

        yield scrapy.Request(url=url, callback=self.parse_page, meta={'loader': loader})
    


