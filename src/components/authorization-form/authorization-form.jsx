import SubmitButton from '../submit-button/submit-button';

const AuthorizationForm = (props) => {

  const handleInputChange = (evt) => {
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
              onChange={handleInputChange}
              id="login"
            />
            <label className="form__label" htmlFor="password">Password</label>
            <input
            className="form__input"
              onChange={handleInputChange}
              id="password"
              name="password"
            />
            <SubmitButton className="submit-button"/>
          </form>
        </fieldset>

    </div>
  );
};

export default AuthorizationForm;