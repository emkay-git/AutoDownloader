import os
from flask import Flask,request
from flask import render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
	
	url="'https://www.youtube.com/watch?v="
	url=url+request.values.get("https://www.youtube.com/watch?v")+'\''
	os.system("youtube-dl "+url)
	
	return "6"
