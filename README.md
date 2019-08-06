# This is just an example
	-This will be deleted eventually


# About
	- Authenticating users with google


# Task (Completed)
	- Authenticated Users With
		- LocalStrategy (passport-local)
		- GoogleStrategy (passport-google-oauth)
		- Youtube User Data


# What Im Learning
I have came to realize that not many people use MySQL for Google Authenticating.
Im fairly familiar with using MySQL so I decided that it was in my best interest
to stick with it. Instead of using MongoDB and creating a User model, I created
database with MySQL Server with a table called User. Instead of auto incrementing id's
I used uuid to generate a longer id to be a little more secure and so I could insert both
local signups and google logins to the same database. (Allowing Google Users To Log Out)

# Database
CREATE DATABASE Test;

CREATE TABLE User(id VARHCAR(200) PRIMARY KEY, token VARCHAR(200), name VARCHAR(200), email VARCHAR(200), password VARCHAR(200));
