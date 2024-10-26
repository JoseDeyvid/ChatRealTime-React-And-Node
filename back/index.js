const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server, {cors: {origin: "http://localhost:5173"}})

const PORT = 3001;

io.on("connect", socket => {
    console.log("Usuário conectado: ", socket.id)

    socket.on('disconnect', reason => {
        console.log("Usuário desconectado: ", reason)
    })

    socket.on('set_username', username => {
        socket.data.username = username
    })

    socket.on('message', message => {
        io.emit('new_message', {
            author: socket.data.username,
            message
        });
    })

})

server.listen(PORT, () => console.log("Server running..."))