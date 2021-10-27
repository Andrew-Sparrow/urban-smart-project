import SubmitButton from '../submit-button/submit-button';
import {useDispatch, useSelector} from 'react-redux';
import {changeLogin} from '../../store/actions';
import {changePassword} from '../../store/actions';
import {AppRoute, AuthorizationStatus} from '../../const';
import {redirectToRoute, changeAuthorizationStatus} from '../../store/actions';

import {getLogin} from '../../store/user/selectors';
import {getPassword} from '../../store/user/selectors';
import Utils from '../../utils/utils';

const AuthorizationForm = (props) => {
  const dispatch = useDispatch();
  const loginValue = useSelector(getLogin);
  const passwordValue = useSelector(getPassword);

  const isAuthorizationCorrect = Utils.verifyAuthorization(loginValue, passwordValue);

  const handleLoginChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeLogin(value));
  };

  const handlePasswordChange = (evt) => {
    const value = evt.target.value;
    dispatch(changePassword(value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
    dispatch(redirectToRoute(AppRoute.PROFILE));
  };

  return (
      <div className="form-container">
        <h2 className="form__title">Authorization</h2>
        <fieldset style={{border: 'none'}} className="form__fieldset">
          <form
            className="form"
            action=""
            onSubmit={handleSubmit}
          >
            <label className="form__label" htmlFor="login">Login*</label>
            <input
              className="form__input"
              onChange={handleLoginChange}
              id="login"
            />
            <label className="form__label" htmlFor="password">Password*</label>
            <input
              className="form__input"
              type="password"
              onChange={handlePasswordChange}
              id="password"
              name="password"
            />
          <SubmitButton className="submit-button" isAuthorizationDataCorrect={isAuthorizationCorrect}/>
          </form>
        </fieldset>

    </div>
  );
};

export default AuthorizationForm;