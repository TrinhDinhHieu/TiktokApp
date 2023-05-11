import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import Tippy from "@tippyjs/react/headless";
import { Wrapper as PoperWrapper } from "../../Poper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = ()=>{};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  //thoát thẻ lớp 2 và thêm data đến thẻ n 
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; // convest sang Menu ktra có children sang true
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange( item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      delay={[0, 700]} //[show, hide]
      offset={[12, 8]} // căn chiều ngang, cao
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex={-1} {...attrs}>
          <PoperWrapper className={cx("menu-propper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PoperWrapper>
        </div>
      )}
      onHidden={()=> setHistory(prev => prev.slice(0,1))} // thoát khỏi về  giao diện 1
    >
      {children}
    </Tippy>
  );
}

export default Menu;
