# Progress

## Creating our server

Preparing Apollo Server to receive our schemas

[Coding](./server/src/index.js)

## Defining the Schema for the clients actions

Define a schema's structure to support the actions that our clients will take. Our example app needs to be able to:

* Fetch a list of all upcoming rocket launches
* Fetch a specific launch by its ID
* Log in the user
* Book a launch for a logged-in user
* Cancel a previously booked launch for a logged-in user

[Coding](./server/src/schema.js)

## Preparing to serve the Schema for the clients actions

Declaring an listener.

[Coding](./server/src/index.js)

## Connecting to a REST API

Connecting the SpaceX v2 REST API to our server

[Coding](./server/src/datasources/launch.js)

## Connecting to a database

Defining a writable data source that allows us to store application data.

[Coding](./server/src/datasources/user.js)

## Adding data sources to Apollo Server

[Coding](./server/src/index.js)

## Writing Resolvers

Linking datasources to schemas. Defining the data origin that populates each field in the Schemas.

[Coding](./server/src/resolvers.js)

## Adding resolvers to Apollo Server

[Coding](./server/src/index.js)
