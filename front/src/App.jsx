import { useState } from 'react'
import './App.css'
import Chat from './components/Chat';
import Join from './components/Join';

function App() {
  const [hasUser, setHasUser] = useState(false);

  return (
    <div>
      {hasUser ? <Chat/> : <Join setHasUser={setHasUser}/>}
    </div>
  )
}

export default App
