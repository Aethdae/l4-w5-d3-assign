# User Manager

Keeps users on a local database.

## Installation

- Backend
  - `py -m venv .venv` to create a python environment
  - `source .venv/Scripts/activate` to start the environment
  - `py -m pip install -r requirements.txt` to install python requirements to the environment
  - Add a list of origins to the origins.txt that the backend will be accessed from. One per line. A default list with the default port for vite is supplied.
  - `flask run` to start backend server

- Frontend
  - `npm i` to get dependencies for the front-end.
  - `npm run dev` in a different terminal to start frontend site

## Usage

- Go to the Users page to view current users.
- Go to the Add User page to add a user with first and last name.
- The created user will show up after one, or an error if something went wrong.
