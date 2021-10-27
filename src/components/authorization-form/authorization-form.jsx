import SubmitButton from '../submit-button/submit-button';
import {useDispatch, useSelector} from 'react-redux';
import {changeLogin} from '../../store/actions';
import {changePassword} from '../../store/actions';

import { getLogin } from '../../store/form/selectors';
import {getPassword} from '../../store/form/selectors';
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

  return (
      <div className="form-container">
        <h2 className="form__title">Authorization</h2>
        <fieldset style={{border: 'none'}} className="form__fieldset">
          <form
            className="form"
            action=""
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