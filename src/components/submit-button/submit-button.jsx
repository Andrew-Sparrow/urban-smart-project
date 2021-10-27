import React from 'react';

const SubmitButton = (props) => {
  const {isAuthorizationDataCorrect} = props;

  return (
    <button
      className={`press-button ${!isAuthorizationDataCorrect && "press-button--disabled"}`}
      type="submit"
      disabled={!isAuthorizationDataCorrect}
    > {'Login'}</button>
  );
};

export default SubmitButton;
