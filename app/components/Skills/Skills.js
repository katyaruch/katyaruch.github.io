import "./skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        {/* <h1 className="title">Навыки</h1> */}
        <ul className="skills__list">
          <li className="skills__cat">
            <p className="skills__title">Основные технологии</p>
            {['html', 'css', 'javascript'].map(skill => <code className="skills__item">{skill}</code>)}
          </li>
          <li className="skills__cat">
            <p className="skills__title">Инструменты</p>
            {['gulp', 'webpack', 'react', 'git'].map(skill => <code className="skills__item">{skill}</code>)}
          </li>
          {/* <li className="skills__cat">
            <p className="skills__title">Вёрстка</p>
            {['Cемантическая разметка', 'Адаптивность', 'Кроссбраузерность', 'Валидность'].map(skill => <code className="skills__item">{skill}</code>)}
          </li> */}
          <li className="skills__cat">
            <p className="skills__title">CSS</p>
            {['BEM', 'Bootstrap', 'Tailwind', 'UIkit', 'sass', 'less'].map(skill => <code className="skills__item">{skill}</code>)}
          </li>
          <li className="skills__cat">
            <p className="skills__title">Работаю с CMS</p>
            {['Wordpress', 'Bitrix', 'Tilda', 'InSales'].map(skill => <code className="skills__item">{skill}</code>)}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
