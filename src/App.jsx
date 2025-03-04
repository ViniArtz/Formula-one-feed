// JSX = JavaScript + XML

//JSX - UM ARQUIVO QUE CONTÉM HTML DENTRO DELE(arquivo javaScript)

// VUE.JS - tambem nos proporciona o uso do jsx
import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from './components/Sidebar.jsx'

import styles from './App.module.css';

import './Global.css'

// author: {avatar_url: "", name:"", role: ""}
// publishedAt: Date
// content: str

const posts = [
  {
    id: 16,
    author: {
      avatarUrl: 'https://imageio.forbes.com/specials-images/imageserve/6753832b78f53643f93a2dbc/0x0.jpg?format=jpg&crop=1263,1266,x300,y30,safe&height=1116&width=716&fit=bounds',
      name: 'Charles Leclerc',
      role: 'Formula 1 Driver'
    },
    content: [
      {type: 'paragraph', 
      content: 'Pole Position babyyyyyyyy !'
      },      
      {type: 'paragraph', 
      content: 'Happy with this, but it is only qualifying, let’s finish the job tomorrow 💪 '
      },
      {type: 'paragraph', 
      content: 'And so happy to see that after all the hard work of the last two years, we are back in the fight.'
      },
      {type: 'link', 
      content: 'https://x.com/ScuderiaFerrari',
      placeHolder:'@scuderiaferrari'
      }
    ],
    publishedAt: new Date('2024-09-14 20:00:00')

  },
  {
    id: 33,
    author: {
      avatarUrl: 'https://cdn.oantagonista.com/uploads/2024/04/SmartSelect_20240418_112233_Instagram-1024x913.jpg',
      name: 'Max Verstappen',
      role: 'Formula 1 Driver'
    },
    content: [
      {type: 'paragraph', 
      content: 'F1 WORLD CHAMPION!!!'
      },      
      {type: 'paragraph', 
      content: 'This is just unbelievable. I started racing with my dad many years ago. We  '
      },
      {type: 'paragraph', 
      content: 'dreamed of becoming a World Champion and now we are. '
      },
      {type: 'link', 
      content: 'https://x.com/redbullracing',
      placeHolder:'@redbullracing'
      }
    ],
    publishedAt: new Date('2023-11-29 20:00:00')

  }
]

function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
         return <Post 
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt} 
         />    
        })}
      </main>
    </div>
  </div>
  )
}

export default App