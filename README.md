# AIP

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

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
