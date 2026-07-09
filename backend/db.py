from sqlalchemy import create_engine
from User import UserBase

engine = create_engine("sqlite:///users.db")
UserBase.metadata.create_all(engine)

def check_req(json):
    if not json.get("first_name") or not json.get("last_name"):
        raise TypeError("Wrong input format.")