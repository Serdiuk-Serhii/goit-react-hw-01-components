import PropTypes from "prop-types";
import css from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item} key={id}>
                <span className={ isOnline === true ? css.online : css.offline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })
    )
}