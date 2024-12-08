# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js servers: unresponsiveness caused by long-running operations in the request handler.  The `bug.js` file contains a server that simulates a long-running task, blocking the event loop and preventing it from handling subsequent requests.

The solution, found in `bugSolution.js`, addresses this using asynchronous techniques.  This ensures that long-running tasks don't block the server's ability to respond to other requests.

## How to Reproduce the Bug

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Open multiple tabs and try to access `http://localhost:3000`.  You'll observe that only the first request will be processed; subsequent requests will hang indefinitely. 

## Solution

The `bugSolution.js` file demonstrates how to resolve this issue by utilizing asynchronous programming techniques such as `setTimeout` or `process.nextTick` for example, to offload the long-running task from the main event loop. The solution would involve using async/await for better readability and maintainability.