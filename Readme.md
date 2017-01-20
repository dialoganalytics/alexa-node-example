# Amazon Alexa Node.js Skill

An example [Amazon Alexa](https://developer.amazon.com/alexa) node.js skill integrated with [Dialog Analytics](https://dialoganalytics.com) running on [AWS Lambda](https://aws.amazon.com/fr/lambda/). Built with [claudiajs/claudia](https://github.com/claudiajs/claudia).

- [Dialog Documention](https://docs.dialoganalytics.com)
- [Dialog API reference](https://docs.dialoganalytics.com/reference)

## Getting started

Clone this repository and run `npm install`

Create an account on https://app.dialoganalytics.com, grab your Dialog API token and bot ID.

Set environment variables in `.env.json`:

```json
{
  "DIALOG_API_TOKEN": "...",
  "DIALOG_BOT_ID": "..."
}
```

## Creating an Alexa skill

Go to the [Amazon Developer Console](https://developer.amazon.com/edw/home.html) and create a new Alexa Skill. Then follow the setup wizard and leave the defaults, except for the following configurations:

### Configuration Model

#### Intent Schema

```json
{
  "intents": [
    {
      "intent": "GetName",
      "slots": [
        {
          "name": "Name",
          "type": "LIST_OF_WORDS"
        }
      ]
    },
    {
      "intent": "ExitApp"
    }
  ]
}
```

#### Custom Slot Types

Type: `LIST_OF_WORDS`

Values:

```
James
Peter
Mike
Andrew
```

### Sample Utterances

```
GetName what do you think of {Name}
GetName what you think about {Name}
GetName what is your opinion on {Name}
GetName what do you think about {Name}
ExitApp stop
```

### Configuration

1. In the Endpoint section, select __HTTPS__.
2. Run `npm run create` from this respository to create and publish a lambda function with `claudia`.
3. Copy the endpoint URL claudia prints out in your terminal and paste it into the input field of the Amazon Developer Console.

### SSL Certificate

Select *My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority*.

Good job, your done!

## Usage

You can test your new skill in two ways. In all cases the conversation will be tracked by Dialog as soon as the skill is triggered.

### Service Simulator

In the Amazon Developer Console __Test__ section you can input an utterrance and preview both the __request__ and __response__ of the lambda function. For example you could try: `What do you think of Phil?`

### Your Skills

Go to your [Alexa App](http://alexa.amazon.com/) in the __Skills__ section, and click on the __Your skills__ button. You'll see the new skill listed, which means you can ask your Amzon Echo something like: `Alexa, ask {name of your skill} what do you think about Phil?`.

## Go further

Read more on how to make the most out of the possibilities offered by Dialog here: https://dialoganalytics.com
