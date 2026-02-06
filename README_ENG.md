### AI Implementation Bot Web App

This project is an example of an AI bot integrated into a web app, built with React, Axios, Python (FastAPI), and a public Hugging Face model (PublicAI).
The bot simulates a virtual support agent, with real-time chat between frontend and backend.

---

## Features

- Send text requests to the AI bot

- Receive responses in real time

- Simple interface with React

- Backend managed with FastAPI

- Use of public Hugging Face models
---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/TUO-USERNAME/NOME-REPO.git

cd NOME-REPO
```
### 2. Backend (Python / FastAPI)
Create a virtual environment:
```
python -m venv venv

source venv/bin/activate   # Linux / Mac

venv\Scripts\activate      # Windows
```
Install dependencies:
```
pip install -r requirements.txt
```
Create a .env file in the backend folder with the following values:
```
HF_TOKEN='INSERT_YOUR_HUGGINGFACE_TOKEN'

DOMAIN='INSERT_YOUR_BACKEND_DOMAIN'
```
Note: replace HF_TOKEN with your Hugging Face token and DOMAIN with your domain or localhost where the backend runs.

Start the FastAPI server:
```
uvicorn main:app --reload
```
### 3. Frontend (React)
Move to the frontend folder:
```
cd front-end
```
Install dependencies:
```
npm install
```
Configure the backend domain if necessary (in the Axios API call):
```
const response = await axios.post("YOUR_BACKEND_DOMAIN/chatBot/userRequest", {
  request: user_request,
});
```
Start the frontend:
```
npm start
```

### - Usage
Open the chat on the frontend.

Type a message.

The backend will send the request to the PublicAI model.

View the bot’s response in real time in the chat.

### - Useful Resources
Hugging Face Inference API ( https://huggingface.co/docs/inference-providers/providers/publicai )

FastAPI Documentation ( https://fastapi.tiangolo.com/tutorial/metadata/ )

Axios Documentation ( https://axios-http.com/docs/intro )

### - Contributi
This project is for instructional purposes. Possible improvements:

- Conversation history

- User authentication

- More advanced UI

- Production deployment Deploy in produzione

