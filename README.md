# node-expose-sspi

Expose the Microsoft Windows SSPI (SSP Interface) to [Node.js®](https://nodejs.org/).

It has been done in order to do NTLM and Kerberos SSO authentication.

You may participate to complete this project if you need to use SSPI in another use case.

This module only works on Microsoft Windows OS.

Require NodeJS version >=12.16.1

## Install

Just do:

```
npm i node-expose-sspi
```

Note: There is a prebuilt binary node addon that will be installed.

## Usage

### SSO Authentication use case

```bat
mkdir myproject
cd myproject
npm init -y
npm i express
npm i node-expose-sspi
```

Make an express web server by doing the `server.js` file:

```js
const express = require("express");
const { sso, sspi } = require("node-expose-sspi");

sso.config.debug = false;

const app = express();

app.use(sso.auth());

app.use((req, res, next) => {
  res.json({
    sso: req.sso
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
```

```
node server.js
```

Open a web browser and go to `http://localhost:3000`.

You should see the JSON result with user, owner and used method (NTLM or Kerberos)

## API

[Access to the detailed API document](./doc/api/README.md). This has been generated with [typedoc](https://github.com/TypeStrong/typedoc).

Do see the API in action, you should read the `sso` source code object. `auth` and `connect` functions are two instructive examples of how to use SSPI with NodeJS.

There is 2 parts in this module:

- `sspi` object which exposes the Microsoft SSPI library API.
- `sso` object, written in typescript/javascript with the following classes or functions:
  - `auth()`: express middleware finding the SSO logged user.
  - `connect({login, password, domain)`: connect with a MS Windows account login/password.
  - `new SSO(serverContextHandle)`: create a SSO object from a secure context handle.
  - `getDefaultDomain()`: get the windows domain/hostname where the server started.

#### Typescript

This module is also integrated with Typescript.

[Typescript example](./doc/typescript.md)

#### NTLM

If you are not on a Microsoft Windows Active Directory Domain, it will use the NLTM authentication protocol.

Note: the NTLM protocol is not very secure, so be sure to be above HTTPS.

#### Kerberos

You should see [this Node Expose SSPI Kerberos dedicated documentation](./doc/Kerberos.md).


## Rebuilding the binary

If the provided Windows binary does not work for your OS,
You can rebuild the Node addon binary:

```
cd .\node_modules\node-expose-sspi
npm run build
```

Note: You need a proper C++ Windows Toolchain installed.
One way to do it is to install this module:

```
npm install --global windows-build-tools
```

## Test and Example

To run the test and the example, just clone this project.

```
git clone https://github.com/jlguenego/node-expose-sspi.git
cd node-expose-sspi
npm i
npm test
npm run example
```

## Development

To compile the native node module, you need:
```
npm install --global windows-build-tools
git clone https://github.com/jlguenego/node-expose-sspi.git
cd node-expose-sspi
npm run build
```

## Angular example

See the Github repository:
https://github.com/jlguenego/angular-sso-example


## TODO

Any idea of new features ? Please tell me ;)
- write a NTLM/Kerberos web client example.

## Author

Jean-Louis GUENEGO <jlguenego@gmail.com> (http://jlg-consulting.com/)
