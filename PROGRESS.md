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

Connecting the SpaceX v2 REST API to our server, building an access to the API.

[Coding](./server/src/datasources/launch.js)

## Connecting to a database

Defining a writable data source that allows us to store application data.

[Coding](./server/src/datasources/user.js)

## Adding data sources to Apollo Server

[Coding](./server/src/index.js)

## Writing Resolvers for some Queries

Linking datasources to schemas. Defining the data hooks that populates fields of types defined in the Schema. Actions enabled (related to types with data hook defined):

* Fetch a list of all upcoming rocket launches
* Fetch a specific launch by its ID

[Coding](./server/src/resolvers.js)

## Adding resolvers to Apollo Server

[Coding](./server/src/index.js)

## Writing Resolvers for the more fields

[Coding](./server/src/resolvers.js)

## Paginate Results

Setting up cursor-based pagination: Redefining the schema: QNow, Query.launches takes in two parameters (pageSize and after) and returns a LaunchConnection object.

[Coding](./server/src/schema.js)

Utils has the function paginateResults that is a helper function for paginating data from the server.

[Coding](./server/src/utils.js)

Updating the necessary resolver functions to accommodate pagination.

[Coding](./server/src/resolvers.js)
