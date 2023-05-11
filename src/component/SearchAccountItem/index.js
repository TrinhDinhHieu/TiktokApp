import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../../component/Images";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2eab33a851d0f43edfa78c01c145857f~c5_100x100.jpeg?x-expires=1683867600&x-signature=QUL4w12LKThY5rAV62Y1MjwtFf0%3D"></Image>
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span> Văn tèo</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </h4>
        <span className={cx("userName")}> nguyenvanteo</span>
      </div>
    </div>
  );
}

export default AccountItem;
