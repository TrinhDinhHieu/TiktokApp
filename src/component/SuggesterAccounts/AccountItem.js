import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "../Layout/Poper";
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({data}) {
  const renderPreview = (props) => {
    //render để hiện ra item
    return (
      <div tabIndex="-1" {...props}>
       
        <PopperWrapper>
          <div className={cx('preview')}>
          <AccountPreview data = {data}/>
          </div>
          </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]} // show/hide
        offset={[-20, 0]} //căn ngang/dọc
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1684227600&x-signature=EJhJpO%2FGC1WokWo4Bp9d%2B1%2FsZzM%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>{data.nickname}</strong>
              {data.tick && (
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
              )}
            </p>
            <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
