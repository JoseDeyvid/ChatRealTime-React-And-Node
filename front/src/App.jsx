import { useState } from 'react'
import './App.css'
import Chat from './components/Chat';
import Join from './components/Join';

function App() {
  const [hasUser, setHasUser] = useState(false);
  const [socket, setSocket] = useState();

  return (
    <div>
      {hasUser ? <Chat socket={socket}/> : <Join setHasUser={setHasUser} setSocket={setSocket}/>}
    </div>
  )
}

export default App
