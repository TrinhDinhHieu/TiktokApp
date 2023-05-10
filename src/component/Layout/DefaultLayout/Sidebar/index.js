import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return ( 
        <aside className={cx('wapper')}>
            <h2>Sidebar page 1 2 3 4</h2>
        </aside>
     );
}

export default Sidebar;