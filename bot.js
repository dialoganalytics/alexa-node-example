'use strict';

var Dialog = require('dialog-api');

var sample = require('lodash.sample');
var botBuilder = require('claudia-bot-builder');

var dialog = new Dialog(process.env.DIALOG_API_TOKEN, process.env.DIALOG_BOT_ID);

var getIntentName = function(alexaPayload) {
  return alexaPayload &&
  alexaPayload.request &&
  alexaPayload.request.type === 'IntentRequest' &&
  alexaPayload.request.intent &&
  alexaPayload.request.intent.name;
};

var api = botBuilder(function(message, originalRequest) {
  if (message.text) {
    return 'I think ' + message.text + ' is a ' + sample(['good old ', 'one hell of a ']) + sample(['pal', 'friend', 'bro']);
  } else if (getIntentName(originalRequest.body) === 'ExitApp') {
    return {
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: 'Bye from Dialog Example!'
        },
        shouldEndSession: true
      }
    };
  } else {
    return {};
  }
}, { platforms: ['alexa'] });

module.exports = api;
