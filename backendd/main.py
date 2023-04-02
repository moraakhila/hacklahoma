from __future__ import unicode_literals

import os
import shutil
import json
from flask_cors import CORS
from flask import Flask, jsonify, request


app = Flask(__name__)
CORS(app)


@app.route('/usersignup',methods = ['POST'])
def signup_user():
	try:
		req_body = request.json

		req_data ={
			'username' :req_body['username'],
		'email' : req_body['email'],
		'password' : req_body['password']

		}

		u_l = []
		ald = {}
		print(req_data)
		with open('account.json','r') as f:
			ald = json.load(f)


		print(ald)
		ald.append(req_data)
		with open('account.json','w') as f:
			json.dump(ald,f)
		f.close()

		return json.dumps([{'callStatus': 'GOOD', 'exception': 'Valid user'}])



	except Exception as e:

		return json.dumps([{'callStatus': 'ERROR', 'exception': str(repr(e))}])



@app.route('/usersignin', methods=['POST'])
def user_sigin():
	try:
		req_body = request.json
		username = req_body['username']
		password = req_body['password']
		print(username)
		print(password)
		with open('account.json') as f:
			accounts_data = json.load(f)
			status = False
			user_flag = 0

			print(accounts_data)
			for a in accounts_data:

				if str(username) == a["username"] and str(password) == a["password"]:
					user_flag = 1
					break

			print(user_flag)
			if user_flag == 1:
				return json.dumps([{'callStatus': 'GOOD', 'exception': 'Valid user'}])
			else:
				return json.dumps([{'callStatus': 'ERROR', 'exception': 'Invalid user'}])


	except Exception as e:
			# log.info('callStatus: ERROR: Exception: ' + str(repr(e)))
			return json.dumps([{'callStatus': 'ERROR', 'exception': str(repr(e))}])













@app.route('/')
def home():
	return "This is backend testing"



if __name__ == "__main__":
	app.run("0.0.0.0", 8000,debug=True)
