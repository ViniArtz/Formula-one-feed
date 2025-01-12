// JSX = JavaScript + XML

//JSX - UM ARQUIVO QUE CONTÉM HTML DENTRO DELE(arquivo javaScript)

// VUE.JS - tambem nos proporciona o uso do jsx
import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from './components/Sidebar.jsx'

import styles from './App.module.css';

import './Global.css'

function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post/>
    <Post/>
      </main>
    </div>
  </div>
  )
}

export default App