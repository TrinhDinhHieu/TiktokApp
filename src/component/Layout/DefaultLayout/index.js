import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

// import HeaderOnly from './HeaderOnly';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Authen from "../components/Authen/Authen";

const cx = classNames.bind(styles);

function Defaultlayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Defaultlayout;
