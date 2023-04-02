from __future__ import unicode_literals

import os
import shutil

from flask_cors import CORS
from flask import Flask, jsonify, request


app = Flask(__name__)
CORS(app)


@app.route('/userlogin',methods = ['POST'])
def verify_user():
	pass

@app.route('/')
def home():
	return "This is backend testing"



if __name__ == "__main__":
	app.run("0.0.0.0", 8000,debug=True)
