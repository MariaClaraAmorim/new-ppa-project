import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

import css from "./styles.module.css";

function Header() {
  return (
    <div className={css.header}>
      <div>
        {/* <img src="public\LogoHeader.png" alt="" /> */}

        <img className={css.imgHeader} src="\public\LogoHeader.png" />
      </div>
      <div className={css.details}>
        <AiOutlineUser className={css.iconUser} />
        <p>Olá,</p>
        <p>Usuário</p>

        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#7a6ded" offset="0%" />
            <stop stopColor="#591885" offset="100%" />
          </linearGradient>
        </svg>
        <a href="/carrinho">
          <AiOutlineShoppingCart
            className={css.iconCar}
            style={{ fill: "url(#blue-gradient)" }}
          />
        </a>
      </div>
    </div>
  );
}

export { Header };
