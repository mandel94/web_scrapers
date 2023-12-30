from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from myproject2.spiders.news.cnbc import CnbcSpider
from myproject2.spiders.news.theverge import ThevergeSpider




settings = get_project_settings()
process = CrawlerProcess(settings)
process.crawl(CnbcSpider)
process.crawl(ThevergeSpider)
process.start() # the script will block here until all crawling jobs are finished


