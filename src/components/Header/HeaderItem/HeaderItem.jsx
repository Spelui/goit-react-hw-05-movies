import { NavLink } from "react-router-dom";
import s from "../Header.module.scss";

const HeaderItem = ({ name, path }) => {
  return (
    <li className={s.header__item}>
      <NavLink to={path} className={s.header__link} activeClassName={s.active}>
        {name}
      </NavLink>
    </li>
  );
};

export default HeaderItem;
