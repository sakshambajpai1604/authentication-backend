# Backend Project

This is a simple backend project using Node.js, Express, MongoDB, and EJS for templating.


## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd Backend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node app.js
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Endpoints

- `GET /` - Renders the index page.
- `POST /create` - Creates a new user.
- `POST /login` - Logs in a user.
- `GET /logout` - Logs out a user.

## Models

### User

The user model is defined in [user.js](http://_vscodecontentref_/5):

```js
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});
