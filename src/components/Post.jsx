import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/wernenveiga.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Wernen Veiga</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de maio as 08 e 13' dateTime='2022-05-11 08:13:38 '>Publicado a 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p>👉 <a href="">jane.design/doctorcare</a> </p>

      <a href="">#novoprojeto</a> <a href="">#nlw #rocketseat</a> 
      </div>
    </article>
  )
}