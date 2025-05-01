### 👨‍💻  Exercise: Custom Event Emitter with Websockets

**Tasks:**
1. Clone the following **<a href="" target="_blank">Repository</a>**
2. Have a look at the **<a href="https://www.npmjs.com/package/socket.io" target="_blank">Server</a>** and **<a href="https://www.npmjs.com/package/socket.io-client" target="_blank">Client</a>** Websocket Documentation
3. In the server, listen for a custom event called `say_hello`
4. When received, log the name and emit back a `greet_back` event
5. In the client, emit `say_hello` with your name after connecting
6. Listen for `greet_back` and print the message

**Socket.io Docs:**
https://socket.io/