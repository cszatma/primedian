# primedian

A web application to find the median prime in a list of the first n primes. Built using React.js and Node.js.

### Usage
### Installing Dependencies
Run either `yarn install` or `npm install` from the root directory. This will install the dependencies for both the server and the client.

### Running the App
To run the app in development mode run `yarn dev` or `npm run dev`. The client is available at `localhost:3000` and the server is available at `localhost:8000`.

Optionally you can run only one of them using either `yarn dev server` and `yarn dev client` respectively. However, running the client on its own is not recommened as it will not function properly without the server.

### Building the App
To create a production build run `yarn build` or `npm run build` in the root directory.

### Production Mode
To run the app in production mode run `yarn prod` or `npm run prod`. Note: This requires having already built the app.

### Testing
To run the server tests run `yarn test` or `npm run test` from the root directory. To run the client tests run `yarn test` or `npm run test` from the `client` directory. [Jest](https://github.com/facebook/jest) is used as the testing framework. [SuperTest](https://github.com/visionmedia/supertest) is used to test the server route and [Enzyme](https://github.com/airbnb/enzyme) is used to test the React components.