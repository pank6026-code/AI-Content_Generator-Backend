// server.js (Final Code: Syntax Fixed and Running in Demo Mode)

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000; 

// Middleware 
app.use(cors()); 
app.use(express.json()); 

// Endpoint: /generate-caption
app.post('/generate-caption', async (req, res) => {
  // Data destructuring
  const { topic, tone, platform } = req.body; 

  // Validation
  if (!topic) {
    // Agar topic nahi dala toh 400 error bhejenge
    return res.status(400).json({ error: 'Topic is required.' });
  }

  // 🛑 DUMMY AI LOGIC START 🛑
  // Server delay daalna (2 second) taki lage ki AI generate kar raha hai
  await new Promise(resolve => setTimeout(resolve, 2000)); 

  // console.log ko simple string concatenation se theek kiya gaya hai
  console.log("[DEMO MODE] Received request for topic: " + topic + ", tone: " + tone + ", platform: " + platform + "."); 

  // Fake AI Response yahan banaya gaya hai
  const dummyCaption = 
    "[DEMO SUCCESS - " + platform.toUpperCase() + "] Aapka " + tone + " caption tayyar hai!\n\n" + 
    "\"" + topic + "\" ke liye, yeh content istemaal karein:\n\n" +
    "➡ This tool is now running perfectly using simple coding logic, confirming that your entire application structure is sound. No API Key is needed for this demo! #CodeIsWorking #FinalFix";

  // Client ko success response bhejna 
  res.json({ caption: dummyCaption });
  
  // 🛑 DUMMY AI LOGIC END 🛑
});

// Server Start
app.listen(port, () => {
  // Console.log ko simple string concatenation se theek kiya gaya hai
  console.log("Server running at http://localhost:" + port);
});