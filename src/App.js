import React from 'react';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as Insta } from './assets/instagram.svg';
import { ReactComponent as Profile } from './assets/profile2.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as JSLogo } from './assets/javascript.svg';
import { ReactComponent as HTML5Logo } from './assets/html5.svg';
import { ReactComponent as NodeJSLogo } from './assets/node.svg';
import { ReactComponent as CSS3Logo } from './assets/css3.svg';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as SassLogo } from './assets/sass.svg';
import { ReactComponent as GitLogo } from './assets/git.svg';
import { ReactComponent as FirebaseLogo } from './assets/firebase.svg';
import ProgressBar from './components/ProgressBar';
import CardProject from './components/CardProject';
import mainImage from './assets/fondo.jpeg';
import Login from './assets/login.png';
import Pokemon from './assets/pokemon.png';
import Movie from './assets/movie1.png';
import styles from './index.module.sass';
// import CardProject from './components/CardProject';

function App() {
  return (
    <section className={styles.App}>
      <div className={styles.imgContainer}>
        <img src={mainImage} atl="main" className={styles.mainImage} />
      </div>
      <div className={styles.middle}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h1>
              FRONTEND <br /> DEVELOPER
            </h1>
            <div className={styles.socialMedia}>
              <a href="https://github.com/lunavazquez">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/mextlivazquez/">
                <Linkedin />
              </a>
              <a href="https://drive.google.com/open?id=1dF5iL-gBkk7pIqyhbALggeY2WAsbTBjx">
                <Profile />
              </a>
              <a href="https://www.instagram.com/imlunacode/">
                <Insta />
              </a>
            </div>
            <h4>Mextli Adriana Vázquez Velazco</h4>
            <p>
              Soy una persona apasionada de la tecnología, me encanta crear
              cosas nuevas e innovadoras, colaborar en nuevos proyectos.
              Autodidacta, abierta al nuevo conocimiento, me gustan las
              matemáticas y siempre he pensado que: "Los límites solo están en
              tu mente".
            </p>
          </div>
          <h1 className={styles.title}>Habilidades</h1>
          <div className={styles.skills}>
            <div className={styles.skill}>
              <HTML5Logo />
              <ProgressBar progress={90} />
            </div>

            <div className={styles.skill}>
              <JSLogo />
              <ProgressBar progress={50} />
            </div>
            <div className={styles.skill}>
              <CSS3Logo />
              <ProgressBar progress={80} />
            </div>
            <div className={styles.skill}>
              <ReactLogo />
              <ProgressBar progress={75} />
            </div>
            <div className={styles.skill}>
              <SassLogo />
              <ProgressBar progress={75} />
            </div>

            <div className={styles.skill}>
              <NodeJSLogo />
              <ProgressBar progress={25} />
            </div>
            <div className={styles.skill}>
              <GitLogo />
              <ProgressBar progress={75} />
            </div>
            <div className={styles.skill}>
              <FirebaseLogo />
              <ProgressBar progress={60} />
            </div>
          </div>
          <h1 className={styles.title}>Proyectos</h1>
          <div className={styles.projects}>
            <CardProject
              demo="https://lunavazquez.github.io/login-form-example/"
              image={Login}
              repo="https://github.com/lunavazquez/login-form-example"
              name="Login"
            />
            <CardProject
              demo="https://lunavazquez.github.io/pokemon/"
              image={Pokemon}
              repo="https://github.com/lunavazquez/pokemon"
              name="Pokedex"
            />
            <CardProject
              demo="https://lunavazquez.github.io/cdmx-api-movies/src/"
              image={Movie}
              repo="https://github.com/lunavazquez/cdmx-api-movies"
              name="Api Movies"
            />
          </div>
          {/* <div className={styles.projects}>
            <div className={styles.projectCard}>
              <a href="https://lunavazquez.github.io/login-form-example/">
                <img
                  src="https://raw.githubusercontent.com/lunavazquez/pokemon-images/master/login.gif"
                  alt=""
                />
              </a>
              <a href="/repo" className={styles.cardText}>
                login
              </a>
            </div>
            <div className={styles.projectCard}>
              <a href="https://lunavazquez.github.io/pokemon/">
                <img
                  src="https://raw.githubusercontent.com/lunavazquez/pokemon-images/master/pokegif.gif"
                  alt=""
                />
              </a>
              <a href="/repo" className={styles.cardText}>
                Pokedex
              </a>
            </div>
            <div className={styles.projectCard}>
              <a href="/demo">
                <img
                  src="https://raw.githubusercontent.com/lunavazquez/pokemon-images/master/pokegif.gif"
                  alt=""
                />
              </a>
              <a href="/repo" className={styles.cardText}>
                movies
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.bottom} />
    </section>
  );
}

export default App;
