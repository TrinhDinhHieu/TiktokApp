// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "./HomeItem.module.scss";
// import classNames from "classnames/bind";
// import {
//   faCheckCircle,
//   faCommentAlt,
//   faHeader,
//   faHeart,
//   faShare
// } from "@fortawesome/free-solid-svg-icons";
// import Button from "../../../component/Button";
// import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
// import { faComment } from "@fortawesome/free-regular-svg-icons";
// import { useState } from "react";

// const cx = classNames.bind(styles);

// function HomeItems() {
//   const [check, setCheck] = useState('black')
//   return (
//     <div className={cx("wrapper")}>
//       <img
//         className={cx("avatar")}
//         src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1684227600&x-signature=EJhJpO%2FGC1WokWo4Bp9d%2B1%2FsZzM%3D"
//         alt=""
//       />
//       <div className={cx("content")}>
//         <div className={cx("account-item")}>
//           <div>
//             <div className={cx("item-info")}>
//               <p className={cx("nickname")}>
//                 <strong>quocnguyenphu</strong>
//                 <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
//               </p>
//               <p className={cx("name")}>Quốc Nguyễn Phú</p>
//             </div>
//             <div className={cx("item-info")}>
//               <p>#hastag #hastag #hastag</p>
//             </div>
//           </div>
//           <Button className={cx("btn-follow")}>Follow</Button>
//         </div>
//         {/* video */}
//         <div className={cx("container")}>
//           <div className={cx("video")}></div>
          
//             <ul className={cx("item-container")}>
//               <li>
//                 <button className={cx("heart-icon")} >
//                    <FontAwesomeIcon icon={faHeart} className={cx(' black')}/> 
//                 </button>
//                   <p>9.2M</p>
//               </li>
//               <li>
//                 <button className={cx("heart-icon")}>
//                   <FontAwesomeIcon icon={faComment} className={cx('icon')}/>
//                 </button>
//                   <p>2M</p>
//               </li>
//               <li>
//                 <button className={cx("heart-icon")}>
//                   <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
//                 </button>
//                   <p>2M</p>
//               </li>
//               <li>
//                 <button className={cx("heart-icon")}>
//                   <FontAwesomeIcon icon={faShare} className={cx('icon')}/>
//                 </button>
//                   <p>9.2M</p>
//               </li>
              
//             </ul>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeItems;
