import React, { useEffect, useState } from 'react'
import './styles.css'

const Chat = ({ socket }) => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const handleSubmit = () => {
        if (message.trim()) {
            socket.emit('message', message)
        }
        setMessage('');
    }

    useEffect(() => {
        socket.on('new_message', newMessage => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        })
    }, [])

    return (
        <div>
            <h1>Chat</h1>
            <div className='chat'>
                {messages.map((message, i) => (
                    <p key={i}>{message.author}: {message.message}</p>
                ))}
            </div>
            <input type="text" placeholder='Digite a mensagem...' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}

export default Chat