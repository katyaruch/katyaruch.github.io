import style from "./Filters.module.scss";

const Filters = ({selectedCategory, onCategoryChange}) => {
  return (
    <div className={style.filters}>
      <button className={style.btn + ` ${selectedCategory === "Все" ? style.active : ''}`} onClick={() => onCategoryChange("Все")}>Все</button>
      <button className={style.btn + ` ${selectedCategory === "Приложение" ? style.active : ''}`} onClick={() => onCategoryChange("Приложение")}>Приложения</button>
      <button className={style.btn + ` ${selectedCategory === "Интернет-магазин" ? style.active : ''}`} onClick={() => onCategoryChange("Интернет-магазин")}>Интернет-магазины</button>
      <button className={style.btn + ` ${selectedCategory === "Многостраничный сайт" ? style.active : ''}`} onClick={() => onCategoryChange("Многостраничный сайт")}>Многостраничные сайты</button>
      <button className={style.btn + ` ${selectedCategory === "Лендинг" ? style.active : ''}`} onClick={() => onCategoryChange("Лендинг")}>Лендинги</button>
    </div>
  )
}

export default Filters
