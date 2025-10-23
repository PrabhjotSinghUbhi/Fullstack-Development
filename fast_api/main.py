from typing import List
from fastapi import FastAPI
"""
from fastapi import FastAPI

-> This imports the FastAPI class from the fastapi package.
-> FastAPI is the main framework class you use to create your web application.
-> You use it to define routes, handle requests, and start your server.
"""

from pydantic import BaseModel
"""
BaseModel is the core class from Pydantic used for data validation.

-> FastAPI uses Pydantic models to:
-> Validate incoming request data (JSON body in POST/PUT requests)
-> Serialize responses (convert Python objects to JSON)
"""

"""
List comes from Python's typing module.

-> It's used to specify type hints for lists (arrays) in your models or function parameters.
-> Very useful for request/response validation.
"""

app = FastAPI()


class Tea(BaseModel):
    id: int
    name: str
    origin: str


teas: List[Tea] = []


@app.get("/")
def read_root():
    return {"message": "welcome to fastapi."}


@app.get("/teas")
def get_teas():
    return teas


@app.post("/teas")
def add_tea(tea: Tea):
    teas.append(tea)
    return tea


@app.put("/teas/{tea_id}")
def update_tea(tea_id: int, updated_tea: Tea):
    for index, tea in enumerate(teas):
        if tea.id == tea_id:
            tea[index] = updated_tea
            return updated_tea
    return {
        "error": "tea not found"
    }


@app.delete("/{tea_id}")
def delete_tea(tea_id):
    for index, tea in enumerate(teas):
        if tea.id == tea_id:
            deleted = teas.pop(index)
            return deleted
    return {
        "error": "Tea not found."
    }
