from flask import Flask
import pymongo
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv, find_dotenv
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "secret key"
load_dotenv(find_dotenv())
app.config["MONGO_URI"] = os.environ['MONGODB_URI']
client = pymongo.MongoClient(os.environ['MONGODB_URI'])
app.config['DB'] = client.get_database('salarymanagement')
db = app.config['DB']
mongo = PyMongo(app)
CORS(app)
