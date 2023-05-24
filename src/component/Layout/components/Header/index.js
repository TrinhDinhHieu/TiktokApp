import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../routes/assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from '../../../../config'
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
  faSignOut,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Button from "../../../Button";
import Menu from "../../Poper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../Icon/Icons";
import Image from "../../../../component/Images";
import Search from "../Search";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
          title: 'Language',
          data: [
              {
                  type: 'language',
                  code: 'en',
                  title: 'English',
              },
              {
                  type: 'language',
                  code: 'vi',
                  title: 'Tiếng Việt',
              },
          ],
      },
  },
  {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
  },
  {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
  },
];


function Header() {
  //custom show Tippy
  
  const currentUser = true;

  //handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;

      default:
        break;
    }
  };
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
  return (
    <header className={cx('wrapper')}>
    <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
            {currentUser ? (
                <>
                    <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                        <button className={cx('action-btn')}>
                            <UploadIcon />
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 50]} content="Message" placement="bottom">
                        <button className={cx('action-btn')}>
                            <MessageIcon />
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')}>
                            <InboxIcon />
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>
                </>
            ) : (
                <>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </>
            )}

            <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                {currentUser ? (
                    <Image
                        className={cx('user-avatar')}
                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                        alt="Nguyen Van A"
                    />
                ) : (
                    <button className={cx('more-btn')}>
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
