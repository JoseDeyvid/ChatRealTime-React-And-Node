import React, { useEffect, useState } from 'react'
import './styles.css'

const Chat = ({ socket, username }) => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [user] = useState(username)
    const handleSubmit = () => {
        if (message.trim()) {
            socket.emit('message', {
                message,
                author: user

            })
        }
        setMessage('');
    }

    useEffect(() => {
        socket.on('new_message', newMessage => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        })

        socket.on('showAllMessages', messages => {
            console.log("Chegou!")
            setMessages(messages);
        })
    }, [])

    return (
        <div>
            <h1>Chat</h1>
            <div className='chat'>
                {messages.map((message, i) => (
                    <p key={i}><span className={user === message.author ? 'author' : 'guest'}>{message.author}:</span> {message.message}</p>
                ))}
            </div>
            <input type="text" placeholder='Digite a mensagem...' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}

export default Chat