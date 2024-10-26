import React from 'react'

const Chat = () => {
    const handleSubmit = async() => {
        
    }
  return (
    <div>
        <h1>Chat</h1>
        <input type="text" placeholder='Digite a mensagem...'/>
        <button onClick={handleSubmit}>Enviar</button>
    </div>
  )
}

export default Chat