import Link from "next/link";
import CopyField from "../CopyField/CopyField";
import Button from "../Button/Button";
import { ArrowRight } from "react-feather";
import IconTelegram from "../../../public/telegram.svg";
import IconHH from "../../../public/hh.svg";
import IconGithub from "../../../public/github.svg";
import IconKwork from "../../../public/kwork.svg";
import "./contacts.scss";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        {/* <h1 className="title">Контакты</h1> */}
        <div className="contact-list">
          <CopyField value={'katya.ruch@gmail.com'}/>

          <Button as={Link} href="https://t.me/katya_ruch" target="blanc">
            <IconTelegram className="icon-left"/>Telegram
            <ArrowRight size={24} className="icon-arrow"/>
          </Button>
          <Button as={Link} href="https://github.com/katyaruch" target="blanc">
            <IconGithub className="icon-left"/>GitHub
            <ArrowRight size={24} className="icon-arrow"/>
          </Button>
          <Button as={Link} href="https://spb.hh.ru/resume/f750aa69ff042472660039ed1f6c4d30475263" target="blanc">
            <IconHH className="icon-left"/>HeadHunter
            <ArrowRight size={24} className="icon-arrow"/>
          </Button>
          {/* <Button as={Link} href="https://kwork.ru/user/katya-r" target="blanc">
            <IconKwork className="icon-left"/>KWORK
            <ArrowRight size={24} className="icon-arrow"/>
          </Button> */}
        </div>
      </div>
    </section>
  )
}

export default Contacts
