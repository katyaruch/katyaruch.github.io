"use client";

import style from "./Header.module.scss"
import Link from "next/link";
import useScrollToAnchor from '../../@hooks/useScrollToAnchor';
import IconTelegram from "../../../public/telegram.svg";

const Header = () => {
  const scrollToAnchor = useScrollToAnchor(42);

	const makeActive = (link) => {
	  scrollToAnchor(link);
	};
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link href="/" className={style.logo}>Katya Ruch</Link>
        <nav className={style.nav}>
          {/* <Link href={`/about`} onClick={() => makeActive(`/#about`)} onKeyDown={() => makeActive(`/#about`)}>Обо мне</Link> */}
          <Link href={`#projects`} onClick={() => makeActive(`/#projects`)} onKeyDown={() => makeActive(`/#projects`)}>Проекты</Link>
          <Link href={`#skills`}>Навыки</Link>
          <Link href={`#contacts`} onClick={() => makeActive(`/#contacts`)} onKeyDown={() => makeActive(`/#contacts`)}>Контакты</Link>
          <Link href="https://t.me/katya_ruch" target="blanc"><IconTelegram width={36} height={36}/></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
