import Link from "next/link";
import HeroImage from "../public/hero.svg";
import Button from "./components/Button/Button";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className='hero__container'>
          <div className="hero__info">
            <h1 className="hero__title">
              Привет! 
              <br/>
              Меня&nbsp;зовут <span className="hero__text-gradient">Катя&nbsp;Руч</span> я&nbsp;веб‑разработчик
            </h1>
            <div className="hero__description">
              <p>
                Знаю HTML, CSS, Javascript, основы React.js
              </p>
              <p>
                Занимаюсь версткой сайтов и&nbsp;веб‑приложений
              </p>
              <Button as={Link} href={'#projects'} primary>Посмотреть проекты</Button>
            </div>
          </div>
          <div className="hero__img">
            <HeroImage/>
          </div>
        </div>
      </section>
      <Skills/>
      <Projects/>
      <Contacts/>
    </main>
  )
}
