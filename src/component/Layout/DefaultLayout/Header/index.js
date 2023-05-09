import styles from "./Header.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles); // giúp tạo css có gạch ngang

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className="inner">
        
      </div>
    </header>
  );
}

export default Header;
