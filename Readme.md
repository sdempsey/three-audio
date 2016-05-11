# Hi, my name is Webstor
![](http://i.imgur.com/bDWAWq8.jpg)

Vital's static site boilerplate.

## Features:
* Abstracted Gruntfile with standard Vital workflow tasks
    * Grunt tasks can be updated in the `/grunt` directory
    * Each `*.js` file corresponds to a task
* Development task with express.js and livereload
* Build task handling image, js, and css minification

## Getting started

1. Clone this repo to a local directory
2. Remove the .git directory and remove the `/dist` directory from `.gitignore`
    * In the terminal, navigate to the new repository and run `rm -rf .git`
3. Initialize a new repository for your project and make your initial commit
    * `git init`
    * `git remote add origin git@github.com:VitalDevTeam/project-name.git`
    * `git add . && git commit -m "Initial Commit"`
4. Install npm dependencies with `npm install`
5. Run `grunt build && grunt watch`
6. Code like crazy 😎



