import React from 'react';
import AuthorizationForm from '../authorization-form/authorization-form';

function Main() {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Authorization</h1>
      <AuthorizationForm />
    </main>
  );
}

export default Main;