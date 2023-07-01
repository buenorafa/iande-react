import Link from "../Link";
import styles from "./style.module.css";

export default function NavBar() {
  return (
    <nav className={`flex justify-between ${styles.nav}`}>
      <a href="#">
        <img src="./iande-logo.png" alt="Logo da Iandê" />
      </a>

      <ul className="px-12 flex items-center justify-around gap-12">
        <li>
          <Link href="#">Sobre</Link>
        </li>
        <li>
          <Link href="#">Projetos</Link>
        </li>
        <li>
          <Link href="#">Mapa</Link>
        </li>
        <li>
          <Link href="#">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
