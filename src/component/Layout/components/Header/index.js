import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Wrapper as PoperWrapper } from "../../Poper";
import images from "../../../../routes/assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faPlus,
  faSignOut,
  faSpinner,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import AccountItem from "../../../SearchAccountItem";
import Button from "../../../Button";
import Menu from "../../Poper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../../component/Icon";
import Image from "../../../../component/Images";
import Search from "../Search";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Enghlish",
    children: {
      title: "language",
      data: [
        {
          code: "en",
          title: "English"
        },
        {
          code: "vn",
          title: "Tiếng việt"
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback"
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keybroad shortcuts"
  }
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
    to: "/profile"
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coins",
    to: "/coins"
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings"
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Log out",
    separate: true
  }
];
function Header() {
  //custom show Tippy
  const [searchResult, setSearchResult] = useState([]);
  const curentUser = true;

  //handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;

      default:
        break;
    }
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo  */}
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        {/* search  */}
        <Search/>

        <div className={cx("action")}>
          {/* show/hide button login */}
          {curentUser ? (
            <>
            {/* upload  */}
              <Tippy
                content={" Upload Video"}
                placement="bottom"
                delay={[0, 50]}
              >
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              {/* Message  */}
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              {/* Inbox  */}
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
              
            </>
          ) : (
            // action
            <>
              <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary> Log In</Button>
            </>
          )}
          {/* tạo Wrapper  */}
          <Menu
            items={curentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {curentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1683950400&x-signature=CiXFZuS3a1TfNUg9TuKXdc9ELnE%3D"
                alt="avatar"
                className={cx("user-avatar")}
                // fallback = ''
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
