import { useState } from 'react'
import './App.css'
import Chat from './components/Chat';
import Join from './components/Join';

function App() {
  const [hasUser, setHasUser] = useState(false);
  const [socket, setSocket] = useState();
  const [username, setUsername] = useState('')

  return (
    <div>
      {hasUser ? <Chat socket={socket} username={username}/> : <Join setHasUser={setHasUser} setSocket={setSocket} username={username} setUsername={setUsername}/>}
    </div>
  )
}

export default App
