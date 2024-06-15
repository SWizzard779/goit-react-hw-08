import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import  styles from './RegistrationPage.module.css'

const RegistrationPage = () => {
  return (
    <div className={styles.registration}>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
