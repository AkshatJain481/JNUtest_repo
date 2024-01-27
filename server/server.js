// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://akshatjain:Skillfulbot123@project.5g7m92f.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Define routes or API endpoints here

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// models/User.js



const userSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  VideoURL: { type: String, required: true },
  ImageLinks: { type: String, required: true },
  Duration: { type: String, required: true },
  Price: { type: Number, required: true },
  Name: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// server.js

// ...

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.post('/api/users', async (req, res) => {
  const { Title, Description, VideoURL, ImageLinks, Duration, Price, Name } = req.body;

  const newUser = new User({ Title, Description, VideoURL, ImageLinks, Duration, Price, Name });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User added successfully' });
    
  } catch (error) {
    res.status(500).json({ error: 'Error adding user' });
  }
});


// Add more routes as needed

// ...
