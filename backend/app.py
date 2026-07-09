from flask import Flask, request
from flask_cors import CORS
from helpers import get_origins
from sqlalchemy.orm import Session
from sqlalchemy import select
from User import User
from db import engine, check_req

app = Flask(__name__)
origins = get_origins()

CORS(app, origins=origins)

@app.route("/")
def home():
    return {"message": "healthy"}, 200

@app.get("/api/users")
def get_all_users():
    with Session(engine) as sess:
        users = sess.scalars(select(User)).all()
        users_to_dict = [user.to_dict() for user in users]
        return {"users": users_to_dict}, 200
    
    return {"error": "No users found!"}

@app.get("/api/users/<int:id>")
def get_user_by_id(id):
    with Session(engine) as sess:
        user = sess.get(User, id)
        if user: 
            return {"user": user.to_dict()}
        return {"error": f"No user with id: {id} found."}
    
@app.post("/api/users")
def add_user():
    req = request.json

    try:
        check_req(req)
    except TypeError:
        return {"error": "Incorrect json data format."}, 415
    
    with Session(engine) as sess:
        user = User(req.get("first_name"), req.get("last_name"))
        sess.add(user)
        sess.commit()
        sess.refresh(user)

        return {"user": user.to_dict()}, 201 
        
