import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';
import Sidebar from "./Sidebar";
// import HeaderOnly from './HeaderOnly';
import Header from '../components/Header';

const cx = classNames.bind(styles);

function Defaultlayout({children}) {
    return (  
        <div className={cx('wrapper')}>
           <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    {/* {children} */}
                    
                </div>
           </div>
        </div>
    );
}

export default Defaultlayout;