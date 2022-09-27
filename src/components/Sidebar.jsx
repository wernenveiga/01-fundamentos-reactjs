import styles from './Sidebar.module.css'
import { PencilSimpleLine } from 'phosphor-react'
export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />

      <div className={styles.profile}>
        
        <img className={styles.avatar} src="https://github.com/wernenveiga.png"  />
        <strong>Wernen Veiga</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        
        <a href="#"> <PencilSimpleLine size={20} /> Editar Perfil</a>
      </footer>

    </aside>
  )
}