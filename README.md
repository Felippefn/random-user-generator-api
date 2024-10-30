# 🌟 Random User Generator API

![image](https://github.com/user-attachments/assets/389e3642-d45a-44f7-a91a-0f6ff76f4455)
 <!-- Replace with your project image URL if you have one -->

Welcome to the **Random User Generator API**! This API is designed to provide a random user profile generator for various applications. It generates random names, last names, emails, and countries, making it perfect for testing and development.

---

## 🚀 **Features**

### 🎉 **Random User Generation:**
- Generate random user profiles with:
  - First Names
  - Last Names
  - Email Domains
  - Countries
  - phone number

### 🛠️ **Customizable Output:**
- Specify the number of users to generate in a single request.
- Output in JSON format for easy integration with other applications.

### 🌐 **Web API:**
- Simple RESTful API to retrieve random user data.

---

## 🛠️ **Tech Stack**

- **Backend:** Node.js, Express
- **Data Storage:** JSON file for user names, last names, emails, and countries, generated with AI.

---

## 📂 **Project Structure**

```bash
├── /data                # Contains the JSON file with names and countries
│   └── random_names_v2.json #Hidden to clarify
├── /routes.js             # API route definitions
├── app.js            # Entry point for the application
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
