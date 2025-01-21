import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" />

            <div className={styles.profile}>
                <Avatar  
                src="https://imageio.forbes.com/specials-images/imageserve/6753832b78f53643f93a2dbc/0x0.jpg?format=jpg&crop=1263,1266,x300,y30,safe&height=1116&width=716&fit=bounds" 
                />

                <strong>Charles Leclerc</strong>
                <span>Formula 1 Driver</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}