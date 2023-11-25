import style from "./Project.module.scss"
import Image from "next/image";
import Link from "next/link";
import { Link as IconLink, GitHub } from 'react-feather';

const Project = ({
  image, 
  title, 
  description,
  category,
  github,
  site
}) => {
  return (
    <div className={style.project}>
      <Image
        src={`./` + image}
        alt={`Превью ` + title}
        width={300}
        height={165}
        className={style.img}
      />
      <div className={style.info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={style.links}>
          {github ? <Link href={github} target="blanc"><GitHub /></Link> : ''} 
          <Link href={site} target="blanc"><IconLink /></Link>
        </div>
      </div>
    </div>
  )
};

export default Project;
