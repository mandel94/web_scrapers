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
        body = response.xpath('//div[@class="group"]//text()').getall()
        loader.add_value('author', author)
        return loader.load_item()

    def parse_node(self, response, node):
        #use iteam loader to populate the item fields
        loader = CNBCNewsLoader(selector=node)
        title = node.xpath('title/text()').get()
        pubDate = node.xpath('pubDate/text()').get()
        description = node.xpath('description/text()').get()
        url = node.xpath('link/text()').get()
        loader.add_value('title', title)
        loader.add_value('date', pubDate)
        loader.add_value('description', description)
        loader.add_value('url', url)
        loader.add_value('source', 'CNBC')

        yield scrapy.Request(url=url, callback=self.parse_page, meta={'loader': loader})
    


