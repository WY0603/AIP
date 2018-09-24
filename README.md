# AIP
This repository is a restaurant reservation website.

1. This website provides restaurant reservation function to users.
2. User can search restaurant by keywords and see its popularity on the website.
3. User has to sign up before making reservation on the website. 
4. User is able to input time of reservation and number of people on the website. 
5. User is able to check his reservation records on the website.
6. Email will be sent to user if he make a reservation successfully. 
7. User is able to view the menu of the reserved restaurant online.

Server startup method: 

1.open file: /client/node_modules/react-scripts/scripts/start.js. 

2.modify const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;. 
  to const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8080;. 
  
3.open terminal and get into project folder. 

4.input node server.js to startup back-end server. 

5.open other terminal and access to project folder, then input 'cd client' to access front-end folder. 

6.input npm start to startup front-end server. 
