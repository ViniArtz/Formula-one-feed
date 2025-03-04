import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) =>{
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://cdn.oantagonista.com/uploads/2024/04/SmartSelect_20240418_112233_Instagram-1024x913.jpg" alt="" />

            <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Max Verstappen</strong>
                        <time title='12 de Janeiro às 14:37' dateTime='2025-01-13 18:37:30'>Cerca de 1h atrás  </time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
                </div> 
            <footer>
            <button onClick={handleLikeComment}>
            <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
            </button>
            </footer> 
            </div>
        </div>
    )   
}