import config from "../../../../../src/config";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu from "./Menu";
import { MenuItems } from "./Menu";
import {
  UserGroupIcon,
  UserGroupActiveIcon,
  HomeIcon,
  LiveIcon,
  LiveActiveIcon,
  HomeActiveIcon
} from "../../../../component/Icon/Icons";
import SuggestedAccounts from "../../../SuggesterAccounts/SuggestedAccounts";
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItems
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItems
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItems
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>

      <SuggestedAccounts label="Suggested accounts" moretitle =" See all" />
      <SuggestedAccounts label="Following accounts" moretitle="Sell more"/>
    </aside>
  );
}

export default Sidebar;
