import classNames from "classnames/bind";
import styles from "./AuthModal.module.scss";
// import { useState } from "react";

const cx = classNames.bind(styles);

function AuthModal({
  title,
  children,
  question,
  buttonTitle,
  isOpen = false,
  onClick,
}) {
  if (!isOpen) {
    return null;
  } else {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("container")}>{children}</div>
        <div className={cx("footer")}>
          <span className={cx("question")}>{question}</span>
          <span className={cx("button")} onClick={onClick}>
            {buttonTitle}
          </span>
        </div>
      </div>
    );
  }
}

export default AuthModal;