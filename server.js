import { Server } from "socket.io"

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (client) => {
  // TODO: implement all event handlers here
})

console.log("Server running on ws://localhost:3000")
