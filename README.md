## pollination-sdk@0.0.1

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

## Look & Feel

Here is a quick demonstration of how to use this library to interact with the Pollination cloud platform.

```javascript

const pollinationSDK = require('@pollination-solutions/pollination-sdk');

const auth = new pollinationSDK.AuthenticationApi();

const APIToken = {
  id: 'some-long-id-string',
  secret: 'some-long-secret-string'
}

auth.login(APIToken).then(res => {
  const { access_token } = res.data;
  
  const config = new pollinationSDK.Configuration({
    accessToken: access_token
  });

  const simulations = new pollinationSDK.SimulationsApi(config);

  const submitPayload = {
    workflow: 'some-long-workflow-uuid',
    inputs: {
      parameters: [
        {
          name: 'precision',
          value: 11
        },
        {
          name: 'hype',
          value: 'overload'
        }
      ],
      artifacts: [
        {
          name: 'big-data',
          location: 'the-biggest-data-centre-ever',
          path: '/data'
        }
      ]
    }
  }

  simulations.create(submitPayload).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(JSON.stringify(err.response.data, null, 2))
  })
}).catch(err => {
  console.log(JSON.stringify(err.response.data, null, 2))
})

```

## Documentation

Full API documentation for this library can be found at [https://pollination.github.io/node-sdk].

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install pollination-sdk@0.0.1 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
