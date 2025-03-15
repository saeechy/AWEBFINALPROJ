// This file is saved inside the 'api' folder.

// Import all required packages
var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const { ObjectId } = require("mongodb");

// Create an instance of the Express app
var app = Express();
app.use(cors());
app.use(Express.json()); // Enable JSON body parsing

// MongoDB connection details
var CONNECTION_STRING = "mongodb+srv://saeechy:1289716@cluster0.zmpqu.mongodb.net/";
var DATABASENAME = "MyDB";
var database;

// Create a listener to connect to MongoDB
app.listen(5000, () => {
  MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
      console.error("MongoDB Connection Failed:", error);
      return;
    }
    database = client.db(DATABASENAME);
    console.log(`Yay! Now connected to MongoDB Cluster`);
  });
});

// ROUTES TO ALL ACTIONS

//Get all volunteers
app.get('/api/volunteers/GetVolunteers', async (req, res) => {
    try {
        let result = await database.collection("volunteers").find({}).toArray();
        console.log("Fetched Volunteers:", result);  // ✅ Debugging log
        res.json(result);
    } catch (error) {
        console.error("Error fetching volunteers:", error);
        res.status(500).json({ error: "Failed to fetch volunteers" });
    }
});


//Add a volunteer
app.post("/api/volunteers/AddVolunteer", (req, res) => {
  let newVolunteer = req.body;
  database.collection("volunteers").insertOne(newVolunteer, (error, result) => {
    if (error) {
      res.status(500).json({ message: "Failed to add volunteer" });
    } else {
      res.json({ message: "Volunteer added!", id: result.insertedId });
    }
  });
});

//Delete a volunteer (Fixed query issue)
app.delete("/api/volunteers/DeleteVolunteers", (req, res) => {
  let id = req.query.id;
  if (!id) return res.status(400).json({ error: "ID is required" });

  database.collection("volunteers").deleteOne({ _id: new ObjectId(id) }, (error, result) => {
    if (error) {
      res.status(500).json({ message: "Failed to delete volunteer" });
    } else if (result.deletedCount === 0) {
      res.status(404).json({ message: "Volunteer not found" });
    } else {
      res.json({ message: "Deleted successfully!" });
    }
  });
});

//Get the contacts
app.get('/api/contacts/GetContacts', async (req, res) => {
  try {
    let result = await database.collection("contacts").find({}).toArray();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the contacts."});
  }
});

//Add contacts
app.post("/api/contacts/AddContact", async (req, res) => {
  try {
    console.log("Received Contact Data:", req.body);
    let newContact = req.body;
    let result = await database.collection("contacts").insertOne(newContact);
    res.json({ message: "Contact added!", id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: "Failed to add contact"});
  }
});

//Delete contacts
app.delete("/api/contacts/DeleteContacts", async (req, res) => {
  try {
    let id = req.query.id;
    if (!id) return res.status(400).json({ error: "ID is Required" });
    let result = await database.collection("contacts").deleteOne({_id: new ObjectId(id)});

    if (result.deletedCount === 0){
      return res.status(404).json({message: "Contact is not found"});
    }
    res.json({ message: "Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({error: "Failed to delete contact"});
  }
});

  //Get User Email
  app.get('/api/subscriber-email/GetEmail', async (req, res) => {
    try {
      let result = await database.collection("subscriber-email").find({}).toArray();
      console.log("Fetched Subscriber's Email: ", result);
      res.json(result);
    } catch (error) {
      console.error("Error fetching subscriber's email: ", error);
      res.status(500).json({error: "Failed to fetch subscriber's email."});
    }
  });

  //Add User Email
  app.post("/api/subscriber-email/AddEmail", (req, res) => {
    let newEmail = req.body;
    database.collection("subscriber-email").insertOne(newEmail, (error, result) => {
      if (error) {
        res.status(500).json({message: "Failed to add subscriber's email" });
      } else {
        res.json({ message: "Subscriber's Email added!", id: result.insertedId });
      }
    });
  });

  //Delete a UserEmail
  app.delete("/api/subscriber-email/DeleteEmail", (req, res) => {
    let id = req.query.id;
    if (!id) return res.status(400).json({ error: "ID is required" });
    database.collection("subscriber-email").deleteOne({_id: new ObjectId(id)}, (error, result) => {
    if (error) {
      res.status(500).json({ message: "Failed to delete subscriber's email "});
    } else if(result.deletedCount === 0) {
      res.statusCode(404).json({ message: "Subscriber's email not found"});
    } else {
      res.json({ message: "Deleted Successfully!"});
    }
    });
  });
