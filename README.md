# Kanban Task Management API

## Introduction

Kanban Task Management is a project management application implemented through Kanban boards. Tasks are extracted from a list of pending actions in a constant workflow.

On a Kanban board, work is displayed on a project in the form of a board organized by columns. Traditionally, each column represents a stage of the work. Individual tasks progress through the different columns until they are completed.

## Features

- [x] Users can register and login.
- [x] Authenticated users can create, delete, read and update their boards, columns, tasks and subtasks. Tasks can be moved through columns.
- [x] Errors are handled through a custom error handler object that checks if the error is operational and sends an appropriate response to the user.
- [x] Processes and potential application errors during runtime are logged in the Console using a logger object that formats the messages according to the type of information logged.

## Installation

1. Close this repository
2. Run <code>npm install</code> to install all dependencies.
3. Create an <code>.env</code> file in your project root folder and add your variables. See <code>.env.sample</code> for assistance.

## Usage

- Run <code>npm run build:dev</code> and <code>npm run start:dev</code> to build and launch the application in dev mode.
- Run <code>npm run build</code> and <code>npm run start</code> to build and launch the application for production.

## Endpoints

### Public

#### User

| HTTP | Endpoint    | Action                  |
| ---- | ----------- | ----------------------- |
| POST | /user/login | Generates an auth token |
| POST | /user/login | Registers an user       |

### Protected

#### Board

| HTTP   | Endpoint        | Action                                                                                 |
| ------ | --------------- | -------------------------------------------------------------------------------------- |
| POST   | /board          | Creates a board and adds its id to the user's boards                                   |
| DELETE | /board/:boardId | Removes the board with the _:boardId_ and removes its reference from the user's boards |
| GET    | /board/:boardId | Reads the board with the _boardId_                                                     |
| PUT    | /board/:boardId | Updates the title of board with the _boardId_                                          |

#### Column

| HTTP   | Endpoint                   | Action                                                                                                            |
| ------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| POST   | /column/:boardId           | Creates a column and adds its id to the board with the _boardId_                                                  |
| DELETE | /column/:boardId/:columnId | Deletes the column with the _columnId_ and deletes its reference from the columns in the board with the _boardId_ |
| GET    | /column/:columnId          | Reads the column with the _columnId_ and paginates the tasks using the limit and skip query parameters            |
| PUT    | /column/:columnId          | Updates the title of the column with the _columnId_                                                               |
| PUT    | /column/:boardId/:columnId | Moves the column with the _columnId_ to a different position of the board with the _boardId_                      |

#### Task

| HTTP   | Endpoint                              | Action                                                                                                                                                                    |
| ------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /task/:columnId/:taskId               | Creates a task and adds its id to the board with the _columnId_                                                                                                           |
| DELETE | /task/:columnId/:taskId               | Deletes the task with the _taskId_ and deletes its reference from the tasks in the column with the _columnId_                                                             |
| GET    | /task/:taskId                         | Reads the task with the _taskId_                                                                                                                                          |
| PUT    | /task/:taskId                         | Updates the title and description of the task with the _taskId_                                                                                                           |
| PUT    | /task/:columnId/:taskId/:nextColumnId | Moves the task with the _taskId_ to a different position of the column with the _nextColumnId_ and deletes its reference from the tasks in the column with the _columnId_ |
| POST   | /task/subtask/:taskId                 | Adds a subtask to the tasks in the subtask with the _taskId_.                                                                                                             |
| DELETE | /task/subtask/:taskId/:subtaskId      | Removes the subtask with the _subtaskId_ from the subtasks in the task with the _taskId_                                                                                  |
| PUT    | /task/subtask/:taskId/:subtaskId      | Toggle the completition of the subtask with the _subtaskId_ in the task with the _taskId_                                                                                 |

## Technologies used

- [Node.js](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [Express.js](https://expressjs.com/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
- [Webpack](https://webpack.js.org/) This is a Javascript module bundler. This way, I can reduce the number of requests, improve loading speed, and manage dependencies.

## Authors

- [Alexander Guillén Hernández](https://github.com/AlexanderTheWise)
