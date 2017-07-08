const Alexa = require('alexa-sdk');
const data = require('./data.js');

const APP_ID = "amzn1.ask.skill.efda1099-9dcc-4576-bfe1-15421985bd00";
const SKILL_NAME = "The Office Quotes & Quiz";
const HELP_MESSAGE = "You can say give me a quote, or, you can say quiz me.. What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";


/**
* pick a random character from data.js
**/
function pickRandomCharacter(obj) {
    let result;
    let count = 0;
    for (let prop in obj) // for each property in obj
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

/**
* pick a random quote from a specified character in data.js
**/
function pickRandomQuote(character) {
  let index = Math.floor(Math.random() * data[character].length);
  let quotes = data[character];
  let randomQuote = quotes[index];
  return randomQuote;
}

/**
* get a new random quote with who said it
**/
function getNewQuote() {
  const character = pickRandomCharacter(data);
  const quote = pickRandomQuote(character);
  const speechOutput = quote + ' ' + character;
  return speechOutput;
}


const handlers = {
    // LaunchRequest when user says 'Alexa, open office quotes'
    'LaunchRequest': function () {
        this.emit('GetNewQuoteIntent');
    },
    // GetNewQuoteIntent when user says 'Give me a quote'
    'GetNewQuoteIntent': function () {
        const speechOutput = getNewQuote();
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, speechOutput);
    },
    // HelpIntent when user says 'Help'
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    // CancelIntent when the user says 'cancel'
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    // StopIntent when the user says 'no' or 'stop'
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

// Give the handler object and it's functions to the lambda for
// execution
exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context); // create alexa obj
    alexa.appId = APP_ID; // register app id
    alexa.registerHandlers(handlers); // register handlers
    alexa.execute(); // begin
};
