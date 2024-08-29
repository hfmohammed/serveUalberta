const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config(); // Load environment variables from a .env file

const app = express();
const PORT = process.env.PORT || 5111; // Use an environment variable for the port

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL; // Set in your .env file
const supabaseKey = process.env.SUPABASE_KEY; // Set in your .env file
const supabase = createClient(supabaseUrl, supabaseKey);

// Use CORS middleware
app.use(cors());

// Use session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key', // Use a secure secret key
    resave: false,
    saveUninitialized: false, // Use false for better security; set to true if needed
    cookie: { 
      secure: false, // Set to true if using HTTPS
      httpOnly: true, // Ensures cookie is sent only over HTTP
      maxAge: 24 * 60 * 60 * 1000 // Cookie expiration time (e.g., 1 day)
    }
}));
  
// Middleware to parse JSON bodies
app.use(express.json());


app.get('/session', (req, res) => {
    console.log('Fetching session...');
    if (req.session && req.session.email) {
        res.json({ email: req.session.email });
    } else {
        res.status(401).json({ message: 'No session found' });
    }
});

// Signup route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    console.log('Signing up...', email);

    try {
        // Insert data into Supabase
        const { data, error } = await supabase
            .from('users')
            .insert([{ email, password }]);

        if (error) {
            return res.status(500).send(error.message);
        }

        res.status(200).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (error) {
            return res.status(500).send(error.message);
        }

        if (data && data.password === password) {
            req.session.email = email;
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

// Add post route
app.post('/addPost', async (req, res) => {
    const { email, text } = req.body;
    console.log('Adding post from:', email, 'Text:', text);

    const posted_on = new Date();
    console.log(posted_on); // Prints the current date and time
    
    try {
        // Insert data into Supabase
        const { data, error } = await supabase
            .from('posts')
            .insert([{ email, posted_on, text }]);

        if (error) {
            return res.status(500).json({ message: error.message });
        }

        res.status(200).json({ message: 'Post added successfully', data });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Fetch posts route
app.get('/posts', async (req, res) => {
    try {
        // Query the Supabase table to get posts
        const { data, error } = await supabase
            .from('posts') // Replace 'posts' with your table name
            .select('*');

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
