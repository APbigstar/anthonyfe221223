import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import styles from './Widget.module.css';
import { useAppDispatch } from '../../app/hooks';
import { updateSelectedUser } from './widgetSlice';

interface User {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
}

export function Widget(props: any) {
  const dispatch = useAppDispatch();

  const [usersInfo, setUsersInfo] = useState(props.usersInfo);
  const [displayInfo, setDisplayInfo] = useState(props.usersInfo);
  const [displayLimit, setDisplayLimit] = useState(true);

  useEffect(() => {
    if (displayLimit)
      setDisplayInfo(usersInfo.slice(0, 3))
    else
      setDisplayInfo(usersInfo)
  }, [displayLimit, usersInfo])

  const viewAll = () => {
    setDisplayLimit(!displayLimit)
  }

  return (
    <div>
      <div className={styles.widgetContainer}>
        {displayInfo && displayInfo.map((userInfo:User, index:Number) => {
          return <div className={styles.row + ' ' + styles.userContainer} key={index.toString()}>
            <div className={styles.textLeft + ' ' + styles.row}>
              <img className={styles.avatar} src={"assets/" + userInfo.photo} alt="" />
              <div>
                <b>{userInfo.name}</b>
                <p>{userInfo.email}</p>
              </div>
            </div>
            <Link to={'/userinfo'}>
              <button className={styles.button} onClick={() => {dispatch(updateSelectedUser(userInfo))}}>View</button>
            </Link>
          </div>;
        })}
        {
          usersInfo.length > 3 ? <button className={styles.viewAll} onClick={viewAll}>View {displayLimit ? 'all' : 'less'}</button> : ''
        }
      </div>
    </div>
  );
}
