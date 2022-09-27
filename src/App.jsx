import { useState } from 'react'
import { Post } from './components/Post'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
        <Post 
        author="Wernen Veiga"
        content= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel minus iste eaque aperiam cupiditate aut enim! Atque similique illo cum rerum est, animi laborum, quae vitae mollitia magnam molestiae itaque!"  
        />
      
        <Post
        author="Outro autor"
        content= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel minus iste eaque aperiam cupiditate aut enim! Atque similique illo cum rerum est, animi laborum, quae vitae mollitia magnam molestiae itaque!"   />
        <Post />
        </main>
      </div>
    </div>
    
  )
}

export default App
