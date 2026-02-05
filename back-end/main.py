from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Ciao, FastAPI funziona!"}

def main():
    print("Progetto Pyhton inizializzato")

# Solo se eseguito come script principale
if __name__ == "__main__":
    main()
