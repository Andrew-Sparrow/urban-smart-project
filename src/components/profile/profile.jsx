import {redirectToRoute, logout} from '../../store/actions';
import {useDispatch} from 'react-redux';
import {AppRoute} from '../../const';

function Profile() {
  const dispatch = useDispatch();
  const login = localStorage.getItem('login');

  const handleLogout = () => {
    dispatch(logout());
    dispatch(redirectToRoute(AppRoute.MAIN));
  };

  return (
    <div className="profile">
      <h1 className="profile__login">{login}</h1>
      <button type="button" className="press-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
