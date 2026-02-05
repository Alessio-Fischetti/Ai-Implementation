from dotenv import load_dotenv
from fastapi import FastAPI

import os
from openai import OpenAI, BaseModel
from starlette.middleware.cors import CORSMiddleware

load_dotenv()

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.environ["HF_TOKEN"],
)
app = FastAPI()

origins = [
    "http://localhost:5173",  # il dominio del tuo frontend Vite
    "http://127.0.0.1:5173",  # se usi 127.0.0.1
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # domini permessi
    allow_credentials=True,
    allow_methods=["*"],        # GET, POST, etc.
    allow_headers=["*"],  # Content-Type, Authorization...
)

class RichiestaUtente(BaseModel):
    richiesta: str


@app.post("/chatBot/userRequest")
def read_root(data: RichiestaUtente):
    return chiedi_al_bot(data)


def chiedi_al_bot(data: RichiestaUtente):
    completion = client.chat.completions.create(
        model="allenai/Olmo-3.1-32B-Instruct:publicai",
        messages=[
            {
                "role": "user",
                "content": data.richiesta
            }
        ]
    )

    return completion.choices[0].message
