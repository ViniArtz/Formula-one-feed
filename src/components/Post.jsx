import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props){
    return(
<article className={styles.post}>
    <header className={styles.cabecalhoPost}>
        <div className={styles.author}>
            <img className={styles.avatar} src="https://imageio.forbes.com/specials-images/imageserve/6753832b78f53643f93a2dbc/0x0.jpg?format=jpg&crop=1263,1266,x300,y30,safe&height=1116&width=716&fit=bounds" alt="" />
            <div className={styles.authorInfo}>
                <strong>Charles Leclerc</strong>
                <span>Formula 1 Driver</span>
            </div>
        </div>


        <time title='12 de Janeiro às 14:37' dateTime='2025-01-12 14:37:30'>Publicado há 1h</time>
    </header>

    <div className={styles.content}>
        
    <p>Pole Position babyyyyyyyy !</p> 
    <p>Happy with this, but it is only qualifying, let’s finish the job tomorrow 💪 </p>
    <p>And so happy to see that after all the hard work of the last two years, we are back in the fight.</p> 
    <p><a href="https://x.com/ScuderiaFerrari">@scuderiaferrari</a> ❤️</p>
    </div>

    <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
       <footer>
        <button type="submit">Publicar</button>
       </footer>
    </form>

    <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
        
    </div>
</article>
        )
}
