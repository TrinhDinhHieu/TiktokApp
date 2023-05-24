import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeIcon } from "../../../component/Icon/Icons";
import styles from "./Follow.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Follow() {
  return (
    <div className={cx("content")}>
      <div className={cx("account-item")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1684227600&x-signature=EJhJpO%2FGC1WokWo4Bp9d%2B1%2FsZzM%3D"
          alt=""
        />
        <div className={cx("item-info")}>
          <p className={cx("nickname")}>
            <strong>quocnguyenphu</strong>
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          </p>
          <p className={cx("name")}>Quốc Nguyễn Phú</p>
        </div>
        <button className={cx("btn-follow")}>Follow</button>
      </div>
    </div>
  );
}

export default Follow;
