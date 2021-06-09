# Exercise Tracker (MERN Stack)
### What is it?
Web app that saves information about your loved exercises in a mongoDB server like it's description, duration, date.
There can be multiple users in the app each with there own exercises. All CRUD operations are applied.

### Installation
* Download the git repository from github
* In the main folder run `npm install` to install the dependencies for front-end
* Go to backend folder and run `npm install` to install the dependencies for back-end
* Install and run MongoDB server on your machine or use Mongo Atlas
* Save the link to the DB server in /backend/.env file in this variable `MONGO_SERVER = "{DB server link}"`, without {}.
* Now run `node server` on backend folder then `npm start` on the main folder to start your application

### Made using
* React js
* Node js
* MongoDB (mongoose)
* Express 
* React Router
* Bootsrap

### Folder structure
```bash
├── README.md
├── package.json
├── backend     # node and mongodb models files
│   ├── models  # define the documents/data structure (the fields in documents)
│   │   ├── exercise.model.js
│   │   └── users.model.js
│   ├── routes  # split the backend to seperate routes for exercise and users related functions
│   │   ├── exercise.js
│   │   └── users.js
│   ├── .env    # have MONGO_SERVER variable which holds the mongoDB server connection link
│   ├── package.json
│   └── server.js   # initialize node server, express and mongodb connection
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── index.js
    ├── App.js
    ├── index.css
    └── components  # component for each page/view in the app and the navbar
        ├── ExerciseList.js     # homepage
        ├── CreateExercise.js
        ├── CreateUser.js
        ├── EditExercise.js
        └── Navbar.js
```

##### Made by Yusef Nsar