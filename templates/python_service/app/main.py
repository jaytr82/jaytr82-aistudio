from fastapi import FastAPI


app = FastAPI(title="Python Service Template")


@app.get("/health")
def healthcheck() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/")
def read_root() -> dict[str, str]:
    return {"message": "Python service template"}
