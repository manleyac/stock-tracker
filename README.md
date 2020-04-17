# Stock Tracker

### Data Sources


### Technology Used


### Instructions to Deploy Locally

This program uses MongoDB Atlas as our database. The first step is to create a new cluster in Atlas.
Instructions for this can be found [here](https://docs.atlas.mongodb.com/getting-started/).

Once created, copy the connection string under Connect your application tab. Then return to the project files.
Navigate to server/config and create a file named default.json. Inside the file paste your connection string inside an object as shown below.

` {
   mongoURI: "Your String Here"
}`

Open a terminal session and navigate to stock-tracker/server

run command `npm run dev`

If you see "MongoDB Connected!" in your terminal, then the database is set up properly.