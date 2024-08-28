# Vue Angular React (VAR) Comparison

## Running Locally

To run locally for preview purposes, follow these steps:

1. Clone the repo to your local machine.
1. Ensure Node.js and npm are already installed on your local machine. If not, you can install them by visiting: `https://nodejs.org/`
1. Ensure the root folder of the repo is your working directory (e.g. `cd var-web-ui`).
1. Run: `npm install`
1. After the installation is complete, run: `npm run preview`
1. Navigate in your web browser to: `http://localhost:3000/`
1. You should now see a sign-in screen.

To run for development purposes:

1. First follow the steps above to run for preview purposes. This ensures your local environment is set up.
1. Run: `npm run dev`
1. Navigate in your web browser to one of the following: 
   - Angular: `http://localhost:4200/`
   - React: `http://localhost:5173/`
   - Vue: `http://localhost:5174/`
1. You should now see the Single-Page-App, as it would look after a user has signed in.
1. As you make changes within the `var-spa-*` folders, you should see the changes reflected in your web browser.

## Sections of the codebase

#### Single-Page-App

For each framework (Angular, React, Vue), a Single-Page-App is located in the respective `var-spa-*` folder. 

##### Angular

In the `var-spa-angular` folder is an Angular project built with the Angular CLI tool.

##### React

In the `var-spa-react` folder is a React TypeScript project built with the Vite build tool.

##### Vue.js

In the `var-spa-vue` folder is a Vue.js TypeScript project built with the Vite build tool.

#### UI Asset Server

The UI Asset Server is located in the `var-ui` folder. For now, it is simply an Express Node.js web application, built with the Express application generator tool. It exists as the gatekeeper to the Single-Page-App and thus provides a sign-in page. Listens at: `http://localhost:3000/`

TODO: To provide a sign-in page, thinking this might be changed to a Nest.js app, see: https://docs.nestjs.com/techniques/mvc

#### Mock API Server

The Mock API Server is located in the `var-api` folder. It is a bare minimum Express Node.js web application. It primarily utilizes the OpenAPI Backend package to generate RESTful API endpoints from OpenAPI Spec files. But it can be used to provide any mock back-end API endpoints as needed for local development purposes. Listens at: `http://localhost:9000/`

## Contributing

TODO...

## Deploying

The `Dockerfile` located in the root of this repo can be used to generate a container image for deployment. The resulting container runs the UI Asset Server which is a Node.js web application.

As you can see from the Dockerfile, the following steps are taking place:

1. The Single-Page-App is built into static assets.
1. These static assets are then placed into the `public` directory of the UI Asset Server.
1. This Node.js web application provides a sign-in page and subsequently serves the static assets according to the security logic.
