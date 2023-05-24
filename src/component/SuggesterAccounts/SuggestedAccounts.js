import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccountItem";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function SuggestedAccounts({
  label,
  moretitle,
  data = [],
  onViewChange,
  isSeeAll = false
}) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      {data.map((account) => {
        return (
          <Link
            to={`/@${account.nickname}`}
            state={{ user: account }}
            key={account.id}
          >
            <AccountItem data={account} />
          </Link>
        );
      })}

      <p className={cx("more-btn")}>{moretitle}</p>
    </div>
  );
}

export default SuggestedAccounts;
