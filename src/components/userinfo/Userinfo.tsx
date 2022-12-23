import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectedUser } from '../widget/widgetSlice';
import styles from './Userinfo.module.css';

export function Userinfo() {
  const userinfo = useAppSelector(selectedUser);
  
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={'assets/' + userinfo.photo} alt="" />
        <b>{userinfo.name}</b>
        <p>{userinfo.position}</p>
      </div>
      <div>
        <div className={styles.row}>
          <b>Phone</b>
          <p>{userinfo.phone}</p>
        </div>
        <div className={styles.row}>
          <b>URL</b>
          <p className={styles.link}>https://example.com</p>
        </div>
        <div className={styles.row}>
          <b>Phone</b>
          <p className={styles.link}>{userinfo.email}</p>
        </div>
      </div>
      <button className={styles.button}>Send message</button>
      <Link to={'/'}><b className={styles.closeBtn + ' fa fa-close'}></b></Link>
    </div>
  );
}
