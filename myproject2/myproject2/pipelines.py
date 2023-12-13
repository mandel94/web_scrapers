# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymongo
from pymongo import MongoClient
import hashlib





class NewsMongoDBPipeline(object):

    collection_name = "news"

    # Implement this: https://docs.scrapy.org/en/latest/topics/item-pipeline.html

    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        # Conn

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
        mongo_uri=crawler.settings.get("MONGO_URI"),
        mongo_db=crawler.settings.get("MONGO_DATABASE", "items"),
        )
    
    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        # Create new database named media
        self.db = self.client[self.mongo_db]        

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        # Create news ID
        # news_id = self.create_news_id(item['title'], item.get('author', ''))
        item['title']    
        self.db[self.collection_name].insert_one(ItemAdapter(item).asdict())
        return item
    
    def create_news_id(self, title, author):
        # Concatenate title and author and hash the result to create a unique ID
        unique_string = f"{title}{author}".encode('utf-8')
        news_id = hashlib.sha1(unique_string).hexdigest()
        return news_id
