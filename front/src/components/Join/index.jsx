import { useState } from "react";
import { io } from "socket.io-client";

const Join = ({ setHasUser }) => {
    const [username, setUsername] = useState('')

    const handleJoin = async () => {
        if (username.trim()) {
            const socket = await io.connect('http://localhost:3001')
            socket.emit('set_username', username)
            setHasUser(true);
        }

    }

    return (
        <div>
            <h1>Join</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Digite o nome do usuário..." />
            <button onClick={handleJoin}>Entrar</button>
        </div>
    )
}

export default Join