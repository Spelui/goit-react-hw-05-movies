import HeaderItem from "./HeaderItem/HeaderItem";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.header__nav}>
          <ul className={s.header__list}>
            <HeaderItem name="Home" path="/homepage" />
            <HeaderItem name="Movies" path="/movies" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
