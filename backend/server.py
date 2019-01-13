from flask_pymongo import PyMongo
from flask import Flask, request, url_for, abort, jsonify, make_response


app = Flask(__name__)

#Config
app.config['MONGO_DBNAME'] = 'users'
app.config['MONGO_URI'] = 'mongodb://127.0.0.1:27017/users'

#Set up database
mongo = PyMongo(app)
users = mongo.db.users


#Route for login
@app.route('/api/users/login', methods=['POST'])
def login():
	user = users.find_one({'email': request.json['email']})

	if user:
		real_password = user['password']
		test_password = request.json['password']

		if real_password==test_password:
			return make_response(jsonify({'response': 'True'}))

	return make_response(jsonify({'response': 'False'}))

@app.route('/api/users/register', methods=['POST'])
def register():
	user = users.find_one({'email': request.json['email']})

	if not user:
		user = {
			'fname': request.json['fname'],
			'lname': request.json['lname'],
			'email': request.json['email'],
			'phone': request.json['phone'],
			'password': request.json['password'],
			'licensePlate': [request.json['licensePlate']]
		}

		users.insert(user)

		return make_response(jsonify({'response': 'True'}))
	return make_response(jsonify({'response': False}))


if __name__ == '__main__':
    app.run(debug=True)


