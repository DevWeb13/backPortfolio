<p>
 <img width=200px height=200px src="https://github.com/DevWeb13/server-P14-/blob/master/img/logo-readme.png" alt="Project logo"></a>
</p>

<h3>server</h3>

<div>

# Server-P14-

> Server express for app: https://github.com/DevWeb13/giulianoloic_14_28052022

## Project Realized By Giuliano Loic

## Made With

![JavaScript](https://img.shields.io/badge/Language-JS-yellow) ![Express](https://img.shields.io/badge/Framework-Express-blue) ![BDD](https://img.shields.io/badge/BDD-MongoDb-ff69b4) ![Vercel](https://img.shields.io/badge/Deploy-Vercel-black) ![cors](https://img.shields.io/badge/Library-cors-blueviolet) ![dotenv](https://img.shields.io/badge/Library-dotenv-blueviolet) ![mongoose](https://img.shields.io/badge/Library-mongoose-blueviolet) ![IDE](https://img.shields.io/badge/IDE-VsCode-blue) ![NODE](https://img.shields.io/badge/Node-v16.13.0-ff69b4) 

</div> 

|                                                                                                              summary                                                                                                               |                                                                                                           score                                                                                                            |                                                                                                      to do                                                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|              [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_server-P14-&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=DevWeb13_server-P14-)              |  [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_server-P14-&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=DevWeb13_server-P14-)  |  [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_server-P14-&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=DevWeb13_server-P14-)   |
| [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_server-P14-&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=DevWeb13_server-P14-) | [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_server-P14-&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=DevWeb13_server-P14-) | [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_server-P14-&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=DevWeb13_server-P14-) |
|                   [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_server-P14-&metric=bugs)](https://sonarcloud.io/summary/new_code?id=DevWeb13_giulianoloic_14_28052022)                   |    [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_giulianoloic_14_28052022&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=DevWeb13_giulianoloic_14_28052022)    |                                                                                                                                                                                                                 |
|        [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_giulianoloic_14_28052022&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=DevWeb13_giulianoloic_14_28052022)        |                                                                                                                                                                                                                            |

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=DevWeb13_giulianoloic_14_28052022)](https://sonarcloud.io/summary/new_code?id=DevWeb13_giulianoloic_14_28052022)

*Two repositories are needed to enable the project to run:*


## 1. FRONT-END

You can get the APP FRONT END code here: <https://github.com/DevWeb13/giulianoloic_14_28052022>

Please refer to the Readme.md documentation provided for installation and use.



## 2. BACK-END API

The present repository contains this part of the project. Any package manager such as npm or yarn is required.
<h2>! You must have a mongoDB account and create a database for the server to be functional !</h2>

### URL/PORT

The default URL used by the API is <http://localhost:5000>.

&nbsp;


### Use the application

* Log in or create a mongoDb Atlas account:<https://www.mongodb.com/fr-fr>
* Create a free database cluster.
* Clone this server API.
* You have to clone the project locally with either/or:

```bash
# HTTPS
git clone https://github.com/DevWeb13/server-P14-.git
# SSH
git clone git@github.com:DevWeb13/server-P14-.git
```

* Then access inside your local repository and install dependencies using :

```bash
npm install
```

* In server.js file, replace process.env.MONGODB_URI with YOUR mongodb connect.

```js
// Replace process.env.MONGODB_URI with YOUR mongodb connect !!!!!
let cleAPI = process.env.MONGODB_URI;
```
* MongoDb connect exemple:

```js
let cleAPI = "mongodb+srv://rambo:<password>@cluster0.l7uwv4b.mongodb.net/?retryWrites=true&w=majority";
```

* Launch the application with :

```bash
 npm run dev
 ```
* A confirmation message display in the console:

```js
Server started at http://localhost:5000
Connexion à MongoDB réussie !
```

### URL/PORT

The default routes URI used by the application is <http://localhost:5000/employees>.

&nbsp;






