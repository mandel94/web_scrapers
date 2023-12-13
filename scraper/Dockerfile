# Use an official Python runtime as the base image
FROM python:3.10

# Set the working directory in the container
WORKDIR .

# Install scrapy and pymongo
RUN pip install scrapy pymongo
    

EXPOSE 5000

# Copy the project files to the working directory
COPY . .

# Set the entry point to run_spiders.py
CMD ["python", "myproject2/run_spiders.py"]

