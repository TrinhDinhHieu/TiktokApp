import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Wrapper as PoperWrapper } from "../../Poper";
import images from "../../../../routes/assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faPlus,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import AccountItem from "../../../SearchAccountItem";
import Button from "../../../Button";
import Menu from "../../Poper/Menu";

const cx = classNames.bind(styles);

function Header() {
  //custom show Tippy
  const [searchResult, setSearchResult] = useState([]);

 const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}/>,
    title: 'Enghlish',

  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: 'Keybroad shortcuts'
  },

 ]
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo  */}
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        {/* search  */}
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex={-1} {...attrs}>
              <PoperWrapper>
                <h4 className={cx("search-title")}> Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PoperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search ..." spellCheck={false} />
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
            </button>
            <FontAwesomeIcon
              className={cx("loading")}
              icon={faSpinner}
            ></FontAwesomeIcon>
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </div>
        </Tippy>
        {/* action  */}
        <div className={cx("action")}>
          <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary> Log In</Button>

          {/* tạo Wrapper  */}
          <Menu items = {MENU_ITEMS}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </button>
          </Menu >
        </div>
      </div>
    </header>
  );
}

export default Header;
