## Stock Market Tracking API
Stock Market Tracking API

### Getting Started
- install all dependencies
- create database and env file depends on evn.example, a stripe key is required for test payments
- npm run db:reset for reset database
- npm run dev for nodemon
- npm run start for express start

### Instruction
#### User
- POST /users/register -> (user register)
- POST /users/login -> (user login)
- POST /users/logout -> (user logout)
- POST /users/addbalance -> (add balance to account via stripe, card set to default test card)

### Dependencies
- express
- nodemon
- pg
- dotenv
- cookie-session
- bcryptjs

### Test
- Test was done via Postman