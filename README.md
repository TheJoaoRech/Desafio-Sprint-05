<h1 align="center"> 🚗 API SPRINT 5: Renpass.uol - FINAL CHALLENGE 🚗 </h1>
<h3 align="center"> This challenge has as main objective to create an API for a rental company that operates in the car segment , integrating MongoDB with Node.js. </h3>

</br>
<p align="center">
 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
 <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
<img src=https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white/>
</p>
</br>


<h1 align> 🔍 Some informations about the project: </h1>

### 👉 Node version used in the script:
```
14.18.0
```
### 👉 NPM version used in the script:
```
6.14.15
```
### 📚 Libs:
```
"@joi/date": "^2.1.0",
"axios": "^0.27.2",
"bcryptjs": "^2.4.3",
"body-parser": "^1.20.0",
"dotenv": "^16.0.1",
"joi": "^17.6.0",
"jsonwebtoken": "^8.5.1",
"moment": "^2.29.3",
"mongoose-paginate-v2": "^1.6.3",
"moongose": "^1.0.0",
"supertest": "^6.2.3",
"swagger-ui-express": "^4.4.0",
"eslint": "^8.17.0",
"eslint-config-airbnb-base": "^15.0.0",
"eslint-config-node": "^4.1.0",
"eslint-config-plugin": "^1.0.11",
"eslint-config-prettier": "^8.5.0",
"eslint-plugin-import": "^2.26.0",
"eslint-plugin-node": "^11.1.0",
"eslint-plugin-prettier": "^4.0.0",
"jest": "^28.1.1",
"nodemon": "^2.0.16",
"prettier": "^2.7.1"
```
### 🖼️ Frameworks:
```
"express": "^4.18.1"
```

<h1 align> 👣 Steps to run the code: </h1>

## 📁 The entire application is contained within the `src` folder❗

### 1️⃣ - First clone the project:

    git clone https://github.com/TheJoaoRech/Desafio-Sprint-05.git

### 2️⃣ - Second install the dependencies:

    npm install
    
### 3️⃣ - Now change the server settings:

    Rename the ".env.example" file to ".env", 
    now configure the file as you want.
    
### 4️⃣ - Then run the server:

    npm start
    
<h1 align=> ✴️ Endpoints: </h1>

* 👉 Endpoints of the car:
 ```
 post -> ('/api/v1/car/') - Create a new car.
 get -> ('/api/v1/car/') - List all the cars or just a part defined by a parameter.
 get -> ('/api/v1/car/:id') - List a specific car.
 put -> ('/api/v1/car/:id') - Update a specific car.
 delete -> ('/api/v1/car/:id') - Delete a specific car.
 ```
 * 👉 Endpoints of the person:
 ```
 post -> ('/api/v1/person/') - Create a new person.
 get -> ('/api/v1/person/') - List all the persons.
 get -> ('/api/v1/person/:id') - List a specific person.
 put -> ('/api/v1/person/:id') - Update a specific person.
 delete -> ('/api/v1/person/:id') - Delete a specific person.
 ```
 * 👉 Endpoints of the authentificate:
 ```
 post -> ('/api/v1/autenticate/') - Verify a email and password.
 ```
  * 👉 Endpoints of the rental:
 ```
 post -> ('/api/v1/rental/') - Create a new rental.
 get -> ('/api/v1/rental/') - List all the rentals.
 get -> ('/api/v1/rental/:id') - List a specific rental.
 put -> ('/api/v1/rental/:id') - Update a specific rental.
 delete -> ('/api/v1/rental/:id') - Delete a specific rental.
 ```
  * 👉 Endpoints of the reserve:
 ```
 post -> ('/api/v1/rental/:id_rental/reserve') - Create a new reserve.
 get -> ('/api/v1/rental/:id_rental/reserve') - List all the reserves.
 get -> ('/api/v1/rental/:id_rental/reserve/:id') - List a specific reserve.
 put -> ('/api/v1/rental/:id_rental/reserve/:id') - Update a specific reserve.
 delete -> ('/api/v1/rental/:id_rental/reserve/:id') - Delete a specific reserve.
 ```
   * 👉 Endpoints of the fleet:
 ```
 post -> ('/api/v1/rental/:id_rental/fleet') - Create a new fleet.
 get -> ('/api/v1/rental/:id_rental/fleet') - List all the flets.
 get -> ('/api/v1/rental/:id_rental/fleet/:id') - List a specific fleet.
 put -> ('/api/v1/rental/:id_rental/fleet/:id) - Update a specific fleet.
 delete -> ('/api/v1/rental/:id_rental/fleet/:id') - Delete a specific fleet.
 ```
   * 👉 Endpoints of the Swagger document:
 ```
 use -> ('/api/v1/api-docs/') - Show all infos on the swagger document about the script.
 ```
 <h1 align> ⭐ Some useful things about the code: </h1>
 
 ### 🦸 - You can access the application from this Heroku URL: https://apisprint05.herokuapp.com/
 ### 🧪 - You can test the code using the `npm test` command. (The JEST tool was used to perform this feature)
 
 
<h1 align=> 🖌️ API author: </h1>

* 👱‍♂️ **João Vítor Rech** - [Profile Link](https://github.com/TheJoaoRech)