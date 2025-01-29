import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}){

    const publishedDatFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })

    return(
<article className={styles.post}>
    <header className={styles.cabecalhoPost}>
        <div className={styles.author}>
            <Avatar src={author.avatarUrl} alt="" />
            <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
        </div>


        <time title={publishedDatFormatted} dateTime='2025-01-12 14:37:30'>
            {publishedDateRelativeToNow}
        </time>
    </header>

    <div className={styles.content}>
        {content.map(line => {
            if(line.type === 'paragraph') {
                return <p>{line.content}</p>
            } else if(line.type === 'link') {
                return <p><a href={line.content}>{line.placeHolder}</a></p>
            }
        })}
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
