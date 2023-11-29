# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class NewsItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # Define the properties that we want to scrape, and the corresponding fields,
    # having a NewsArticle in mind.
    title = scrapy.Field(default=None)
    date = scrapy.Field(default=None)
    description = scrapy.Field(default=None)
    url = scrapy.Field(default=None)
    body = scrapy.Field(default=None)
    author = scrapy.Field(default=None)
    pass


