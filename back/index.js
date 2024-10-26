const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server, {cors: {origin: "http://localhost:5173"}})

const PORT = 3001;

let messages = [];

io.on("connect", socket => {
    
    socket.emit('showAllMessages', messages);

    socket.on('disconnect', reason => {
        console.log("Usuário desconectado: ", reason)
    })

    socket.on('set_username', username => {
        socket.data.username = username
    })

    socket.on('message', message => {
        messages.push(message)
        io.emit('new_message', message);
    })

})

server.listen(PORT, () => console.log("Server running..."))