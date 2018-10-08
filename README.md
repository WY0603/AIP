# AIP

Easy Dining is a restaurant reservation website. In this website, user is able to perform the main functions as followed:
1. Sigh up with unique username;
2. Log in and log out; 
3. User is able to search restaurant by keywords;
4. User is able to view restaurant details;
5. User is able to view the menu of the reserved restaurant online.
6. User is able to make a reservation only when he has an account logged in. 
7. User is able to select time of reservation and number of people for the reservation; 
8. User is able to check his reservation records on the website;
9. User is able to change or cancel the upcoming and future reservation; 
10. Email will be sent to user if reservation is made successfully. 



## Getting Started

This website mainly utilizes React for the front-end, Node.js for the server side and .... for database. 

### Prerequisites

For development, you are required to install React and Node.js on your environement.


#### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

##### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

##### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

##### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

### Install and configure Node

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install

#### Configure app

Copy `config.sample.json` to `config.json` then edit it with the url where you have setup:

- backend api
- oauth like endpoint for auth
- development

#### Start & watch

    $ npm start

#### Simple build for production

    $ npm run build

#### Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

**Note:** Unix user can just link the `git-hooks/post-merge`:

#### Enable git hooks (unix only :/)

    $ npm run create-hook-symlinks

##### `post-merge` (≃ `npm install`)

This hook will `npm prune && npm install` each time you `git pull` something if the `package.json` has been modified.

##### `pre-commit` (≃ `npm test`)

This hook will just ensure you will commit something not broken bye pruning npm packages not in the `package.json` & eventually reinstall missings/not correctly removed packages.
Then it will try a production build.



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






Server startup method: 

1.open file: /client/node_modules/react-scripts/scripts/start.js. 

2.modify const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;. 
  to const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8080;. 
  
3.open terminal and get into project folder. 

4.input node server.js to startup back-end server. 

5.open other terminal and access to project folder, then input 'cd client' to access front-end folder. 

6.input npm start to startup front-end server. 
