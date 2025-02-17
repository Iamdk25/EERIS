import express from 'express';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url'; // Required for __dirname alternative

// __dirname workaround for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const coursesFile = path.join(__dirname,'src', 'data', 'usf_courses1.json'); // Path to the course data JSON


const app = express();
app.use(bodyParser.json());
app.use(cors());
// Route to send OTP
app.post('/send-OTP', (req, res) => {
  const { email, otp } = req.body; // Destructuring email and OTP from the request body

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required.' });
  }

  // Construct the command to run the Python script with email and OTP
  const command = `python src/backend/OTP_emailer.py ${email} ${otp}`;
  console.log('Executing command:', command);

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error.message}`);
      return res.status(500).json({ success: false, message: 'Error executing script' });
    }
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return res.status(500).json({ success: false, message: 'Script error' });
    }
    console.log(`Script stdout: ${stdout}`);
    // Send success response when OTP is sent
    res.json({ success: true, message: 'OTP sent successfully' });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
