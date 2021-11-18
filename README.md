# Proof of Concept - Micro frontend
[**Demo site**](https://louisandrew.github.io/poc-microfrontend/)

## Background
The project was initially created as a proof of concept and an introduction of the micro frontend architecture for the new [ReAGEnT frontend](https://github.com/ReAGEnT-WiSe2021-22/frontend-v2). We are trying to build multiple front end applications that are composed into a bigger user-facing end application. We try to avoid building a large, monolithic application.

Benefits of micro front end are:
- Decoupled code base and run time
- Independent development
- Technology agnostic
- Independent deployment (multi-repo approach)

## Installation and Usage
**Prerequisites:** Please make sure that `node v.14` or higher is installed in your local machine.


Run  `npm install`  to install the required dependency.

Run `npm start` to start the development server.


## Architecture 
As we are using the micro front end architecture, this project / repository acts as the container project that "*contains*" and loads the individual micro frontends. This container app is built with [React](https://reactjs.org/), and it loads the micro front end with two different approaches:
- Loading the bundled JS file from the local folder (`src/wc`)
- Loading the bundled JS file from a remote source (in this case, from site hosted on Github Pages)

All the individual micro front ends are bundled into a single JS file and converted into a web component, so the project could be framework agnostic.

<pre>
Container
  | | |
  | | |- Counter app. Built in Vue (remote source)
  | |--- Rancdom cats app. Built in React + direflow (local import) by <a src="https://github.com/NathanaelHermanto" target="_blank">NathanaelHermanto</a>
  |----- BMI calculator app. Built in React + direflow (local import) by <a src="https://github.com/sunanmau5" target="_blank">sunanmau5</a>

</pre>

## Todos
- [ ] Fix publish pipeline

## Materials
- https://martinfowler.com/articles/micro-frontends.html
- https://micro-frontends.org/
- https://www.webcomponents.org/introduction
- https://developer.mozilla.org/en-US/docs/Web/Web_Components