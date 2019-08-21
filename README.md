## Social Media API's (Social Media Tracker)
Small scale to CSC400 repo


## About
This Application is serving as a small scale development
for my CSC400 Capstone Project. This is focusing more on
back end / server side coding with API's and transforming them
to html objecs rather than full scale html pages being in the mix.


## Recent Tasks
	- Twitter Api (Completed)
	- Youtube Api (Completed)
	- Facebook Api (In Progress)
I do want to explore further into each api as time goes on
but getting the basics of each first before trying to go too far.

## What Can You Do?
In current state you can:
	- log in with a local account or with google+
	- (each are inserted to a DB model below).
	- You can view most of your Twitter and Youtube Info.
	- Facebook is just displaying name and Page_id. (more to come)

# Database
CREATE DATABASE Test;

CREATE TABLE User(id VARHCAR(200) PRIMARY KEY, token VARCHAR(200), name VARCHAR(200), email VARCHAR(200), password VARCHAR(200));
