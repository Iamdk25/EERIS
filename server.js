import express from 'express';
import { spawn } from 'child_process';

const app = express();
const port = 5000;

app.use(express.json());

// Endpoint to handle OTP sending
app.post('/send-OTP', (req, res) => {
  const { email, otp } = req.body;

  // Spawn a new Python process to run OTP_emailer.py
  const pythonProcess = spawn('python', ['path/to/OTP_emailer.py', email, otp]);

  pythonProcess.stdout.on('data', (data) => {
    const output = data.toString();
    if (output.includes('Success')) {
      res.json({ success: true });
    } else {
      res.status(500).json({ success: false, message: 'Failed to send OTP' });
    }
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    res.status(500).json({ success: false, message: 'Error sending OTP' });
  });

  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      console.error(`Python process exited with code ${code}`);
      res.status(500).json({ success: false, message: 'Error sending OTP' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});