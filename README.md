# 🔐 Google Authentication with React

This project demonstrates how to implement **Google OAuth2 Authentication** in a React application. Users can log in using their Google account, and the app securely handles authentication state.

## ✨ Features

- 🔐 Google Sign-In using OAuth2
- 📦 React + Vite setup
- 🔄 User session management
- 🚫 Protected routes
- ⚙️ Easy configuration with environment variables

## 🚀 Tech Stack

- React
- Firebase Authentication (or Passport.js / Google APIs, depending on your implementation)
- React Router
- Vite (or CRA, adjust accordingly)

## 🔧 Installation

```bash
git clone https://github.com/AbhayanandPandey/Google-Auth.git
cd google-auth-react
npm install
```
# 🔐 Google Authentication Setup Guide

This guide explains how to set up **Google OAuth 2.0 Authentication** for your React app.

## 🚀 Google Auth Setup Steps

### 1. Go to Google Cloud Console

Visit the [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google account.

### 2. Create a New Project

- Click on the project dropdown at the top.
- Click **"New Project"**.
- Give it a name and click **"Create"**.

### 3. Configure OAuth Consent Screen

- In the left-hand menu, navigate to **"APIs & Services" → "OAuth consent screen"**.
- Select **"External"** user type.
- Fill in the required app information.
- Save and continue through the steps.

### 4. Create OAuth 2.0 Credentials

- Go to **"Credentials"** tab.
- Click **"Create Credentials"** → **"OAuth 2.0 Client ID"**.
- Choose **Web application** as the application type.


### 5. Copy Your Client ID

- After creating the credentials, copy the **Client ID**.
- You'll use this ID in your React app to initialize Google Sign-In.

## 📁 .env Example

Create a `.env` file in your project root:
