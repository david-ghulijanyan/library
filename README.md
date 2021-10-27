# Library (will be delete on 01.11.2021)

Library is fullstack demo application for storing articles;

## Features

- Used latest packages versions
- Monorepo based on npm workspaces
- Babel also configured for createing ESM and CJS modules
- JWT Authentication
- API written with common REST standards

## Technologies

- [NodeJS] >= 16.13.0
- [NPM] >= 8.1.0
- [React] - js library for ui
- [SASS] - style sheets
- [MUI] - ui component library
- [Babel] - transcompiler
- [Webpack] - bundler
- [ESLint] - linter
- [Prettier] - formatter
- [Jest] - testing
- [Lint-Staged] - linting before commit
- [Commitlint] - conventional commit messages
- [Husky] - git hooks
- [ExpressJS] - used for API
- [Docker] - containerization
- [MongoDB] - Database

## Main project Structure

- package.json

- applications
  - api
    - package.json
  - client
    - package.json
- packages
  - components
    - package.json
  - react-hooks
    - package.json
  - utils
    - package.json
- tools
  - babel-preset
    - package.json
  - eslint-config
    - package.json
  - jest-config
    - package.json
  - lint-staged
    - package.json
  - prettier-config
    - package.json
  - testing-utils
    - package.json

## Install, build and run

0. Mongodb should be installed for API [https://www.mongodb.com/] (docker not configured yet)
1. clone git [https://github.com/david-ghulijanyan/library.git] repository
2. Install deps

```sh
npm install
```

3. Run

- Development mode

```sh
cd applications/api
npm run dev
cd applications/client
npm run dev

```

- Production mode (not configured for client)

```sh
cd applications/api
npm start

```

- Testing mode (not configured for api)

```sh
cd applications/client
npm test

```

## @ToDo list

- Fix knwon bugs
- Implmenet Docker
- Add more tests
- Fix design
- Add user friendly notifications

## Known bugs

- See more button

# Some Notes

As we use local shared npm packages there are can be problems with testing, to avoid this you can publish packages, at least testing/utils to any registry, say Verdaccio.
