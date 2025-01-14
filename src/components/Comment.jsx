import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://cdn.oantagonista.com/uploads/2024/04/SmartSelect_20240418_112233_Instagram-1024x913.jpg" alt="" />

            <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Max Verstappen</strong>
                        <time title='12 de Janeiro às 14:37' dateTime='2025-01-13 18:37:30'>Cerca de 1h atrás  </time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>Congrats, charles, goodjob!!</p>
                </div> 
            <footer>
            <button>
            <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
            </footer> 
            </div>
        </div>
    )   
}