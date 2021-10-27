import React from 'react';

const SubmitButton = (props) => {
  const {isFormLoading} = props;

  return (
    <button
      className={`press-button press-button__submit ${isFormLoading && "press-button--disabled"}`}
      type="submit"
      disabled={isFormLoading}
    > {'Login'}</button>
  );
};

export default SubmitButton;
