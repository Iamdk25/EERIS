# 💰 EERIS – Expense Entry and Reimbursement Information System

[![GitHub stars](https://img.shields.io/github/stars/Iamdk25/EERIS?style=social)](https://github.com/Iamdk25/EERIS/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Iamdk25/EERIS?style=social)](https://github.com/Iamdk25/EERIS/network/members)
[![GitHub last commit](https://img.shields.io/github/last-commit/Iamdk25/EERIS)](https://github.com/Iamdk25/EERIS/commits/main)
![GitHub top language](https://img.shields.io/github/languages/top/Iamdk25/EERIS)
![License](https://img.shields.io/github/license/Iamdk25/EERIS)

**EERIS** is a full-stack web application designed for student organizations to **streamline expense reporting and reimbursement workflows**.  
It enables members to upload receipts, track submission statuses, and export reports, while administrators can manage users, approve expenses, and analyze spending trends — all through a unified interface.

---

## 🚀 Features

- 🔐 **OTP-based secure login system**  
- 📤 **Receipt upload** and expense submission  
- 📊 **Admin dashboard** with expense analytics  
- 🧾 **PDF export** of individual and filtered reports  
- 📁 **Role-based access control** for members and admins  
- 📬 **Email notifications** via custom SMTP integration  
- 💡 **Built-in rate limiting** and **OpenAI integration** for receipt classification  

---

## 🛠️ Tech Stack

| Layer       | Technologies |
|-------------|--------------|
| **Frontend** | React, Vite |
| **Backend** | Node.js, Express.js |
| **Database** | JSON file-based storage (MongoDB-ready) |
| **Auth & Email** | Custom OTP via Nodemailer + SMTP |
| **AI Integration** | OpenAI API (optional) |

---

## ⚙️ Setup Instructions

**1️⃣ Clone the Repository**
```bash
git clone https://github.com/Iamdk25/EERIS.git
cd EERIS
```
**2️⃣ Install Dependencies**
Make sure you have Node.js and npm installed:
```bash
node -v
npm -v
npm install
```
**3️⃣ Run Development Servers**
  •	Frontend (Vite):
```bash
npm run dev
```
  •	Backend (OTP & receipt processing):
```bash
node server.js
```

## 🔐 Environment Configuration

**Create a .env file inside /src/backend with:**
```bash
EMAIL_ADDRESS="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
SMTP_SERVER="smtp.gmail.com"
SMTP_PORT="587"
OPENAI_API_KEY="your-openai-api-key"
```
Note: Only Gmail accounts with App Passwords (not regular passwords) are supported.
For 2FA accounts, you must use an app password.

## 📂 Project Structure
```plaintext
EERIS/
├── src/
│   ├── backend/                # Backend logic & server
│   │   ├── OTP_emailer.py
│   │   ├── server.js
│   │   └── ...
│   └── frontend/               # React frontend
│       ├── components/
│       ├── pages/
│       └── ...
├── .env                         # Environment variables
└── package.json
```

## 🤝 Contributing

Pull requests are welcome!
For major changes, open an issue first to discuss your ideas.

## 👨‍💻 Author

**Divyarajsinh Karmariya**  
💼 Computer Science Student @ University of South Florida  
🔗 [Portfolio](https://iamdk25.github.io/3d_personal_portfolio/) • 🧠 [GitHub](https://github.com/Iamdk25) • 💼 [LinkedIn](https://www.linkedin.com/in/dkarmariya/)
