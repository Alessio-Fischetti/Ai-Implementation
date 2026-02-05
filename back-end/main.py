from dotenv import load_dotenv
from fastapi import FastAPI

import os
from openai import OpenAI, BaseModel

load_dotenv()

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.environ["HF_TOKEN"],
)
app = FastAPI()


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
