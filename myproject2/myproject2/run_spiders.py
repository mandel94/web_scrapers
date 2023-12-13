from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from spiders.cnbc import CnbcSpider
from spiders.theverge import ThevergeSpider

# Run all the spiders 


settings = get_project_settings()
process = CrawlerProcess(settings)
process.crawl(CnbcSpider)
process.crawl(ThevergeSpider)
process.start() # the script will block here until all crawling jobs are finished
