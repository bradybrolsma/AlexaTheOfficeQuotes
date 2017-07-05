# AlexaTheOfficeQuotes
Simple backend for an Alexa Skill that gives and quizzes random quotes from the TV show "The Office" (US).


## To get this on your computer

### Download Node.js
Node.js is used from the command line (Windows) and Terminal (MacOSX) only. 

- [Node js link](https://nodejs.org/en/)

Some commands you'll need to know:

- `npm install`

### Download Git
Git is a source control tool. Source control lets you work on projects without having to worry about screwing them up. Essestially, it keeps a 'safe' copy of your most current
working project on a branch called `master`, and when you want to make changes you make them on a different branch like `my-changes`, and when you have
everything working you merge `my-changes` into `master`, meaning you know have all of your changes on your working project. 
GitHub is an online storage (called online repository) for Git. Basically you upload your Git repositories to GitHub so anyonen can access them like I have here.

- [Git Link](https://git-scm.com/downloads)

### Clone this GitHub repository to your computer

1. Find a directory where you want to store this project (you can do it on your desktop)
2. Open CMD or Terminal 
3. type `git clone https://github.com/dlowrey/AlexaTheOfficeQuotes.git` and press enter
4. this project and its files are now downloaded onto your computer


### Install the correct node modules (optional)
In the `package.json` file there are rules that tell Node what modules are used in this project (the only one is the `alexa-sdk`). 

- Open CMD or Terminal and cd into the project directory (by typing `cd <path to your project folder>` i.e. `cd C:\Desktop\AlexaTheOfficeQuotes`)
- Type `npm install` and press enter. You should see a loading bar.

