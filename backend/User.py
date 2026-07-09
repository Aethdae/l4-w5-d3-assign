from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String

UserBase = declarative_base()

class User(UserBase):
    def __init__(self, first_name, last_name, id=None ):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name

    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name
        }

