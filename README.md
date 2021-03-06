<h1 align="center"> π API SPRINT 5: Renpass.uol - FINAL CHALLENGE π </h1>
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


<h1 align> π Some informations about the project: </h1>

### π Node version used in the script:
```
14.18.0
```
### π NPM version used in the script:
```
6.14.15
```
### π Libs:
```
"@joi/date": "^2.1.0",
"axios": "^0.27.2",
"bcryptjs": "^2.4.3",
"dotenv": "^16.0.1",
"joi": "^17.6.0",
"jsonwebtoken": "^8.5.1",
"moment": "^2.29.3",
"mongoose": "^6.4.0",
"mongoose-paginate-v2": "^1.6.3",
"moongose": "^1.0.0",
"swagger-ui-express": "^4.4.0",
"eslint": "^8.18.0",
"eslint-config-airbnb-base": "^15.0.0",
"eslint-config-plugin": "^1.0.11",
"eslint-config-prettier": "^8.5.0",
"eslint-plugin-import": "^2.26.0",
"jest": "^28.1.1",
"nodemon": "^2.0.16",
"prettier": "^2.7.1",
"supertest": "^6.2.3"
```
### πΌοΈ Frameworks:
```
"express": "^4.18.1"
```

<h1 align> π£ Steps to run the code: </h1>

## π The entire application is contained within the `src` folderβ

### 1οΈβ£ - First clone the project:

    git clone https://github.com/TheJoaoRech/Desafio-Sprint-05.git

### 2οΈβ£ - Second install the dependencies:

    npm install
    
### 3οΈβ£ - Now change the server settings:

    Rename the ".env.example" file to ".env", 
    now configure the file as you want.
    
### 4οΈβ£ - Then run the server:

    npm start
    
<h1 align=> β΄οΈ Endpoints: </h1>

* π Endpoints of the car:
 ```
 post -> ('/api/v1/car/') - Create a new car.
 get -> ('/api/v1/car/') - List all the cars or just a part defined by a parameter.
 get -> ('/api/v1/car/:id') - List a specific car.
 put -> ('/api/v1/car/:id') - Update a specific car.
 delete -> ('/api/v1/car/:id') - Delete a specific car.
 ```
 * π Endpoints of the person:
 ```
 post -> ('/api/v1/person/') - Create a new person.
 get -> ('/api/v1/person/') - List all the persons.
 get -> ('/api/v1/person/:id') - List a specific person.
 put -> ('/api/v1/person/:id') - Update a specific person.
 delete -> ('/api/v1/person/:id') - Delete a specific person.
 ```
 * π Endpoints of the authentificate:
 ```
 post -> ('/api/v1/autenticate/') - Verify a email and password.
 ```
  * π Endpoints of the rental:
 ```
 post -> ('/api/v1/rental/') - Create a new rental.
 get -> ('/api/v1/rental/') - List all the rentals.
 get -> ('/api/v1/rental/:id') - List a specific rental.
 put -> ('/api/v1/rental/:id') - Update a specific rental.
 delete -> ('/api/v1/rental/:id') - Delete a specific rental.
 ```
  * π Endpoints of the reserve:
 ```
 post -> ('/api/v1/rental/:id_rental/reserve') - Create a new reserve.
 get -> ('/api/v1/rental/:id_rental/reserve') - List all the reserves.
 get -> ('/api/v1/rental/:id_rental/reserve/:id') - List a specific reserve.
 put -> ('/api/v1/rental/:id_rental/reserve/:id') - Update a specific reserve.
 delete -> ('/api/v1/rental/:id_rental/reserve/:id') - Delete a specific reserve.
 ```
   * π Endpoints of the fleet:
 ```
 post -> ('/api/v1/rental/:id_rental/fleet') - Create a new fleet.
 get -> ('/api/v1/rental/:id_rental/fleet') - List all the flets.
 get -> ('/api/v1/rental/:id_rental/fleet/:id') - List a specific fleet.
 put -> ('/api/v1/rental/:id_rental/fleet/:id) - Update a specific fleet.
 delete -> ('/api/v1/rental/:id_rental/fleet/:id') - Delete a specific fleet.
 ```
   * π Endpoints of the Swagger document:
 ```
 use -> ('/api/v1/api-docs/') - Show all infos on the swagger document about the script.
 ```
 <h1 align> β­ Some useful things about the code: </h1>
 
 ### π¦Έ - You can access the application from this Heroku URL: https://apisprint05.herokuapp.com/
 ### π§ͺ - You can test the code using the `npm test` command. (The JEST tool was used to perform this feature).
 
 
<h1 align=> ποΈ API author: </h1>

* π±ββοΈ **JoΓ£o VΓ­tor Rech** - [Profile Link](https://github.com/TheJoaoRech)