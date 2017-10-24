import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './Logo.css';

function Logo({ rotating, className }) {
  const extraClass = rotating ? 'Logo-spinning' : '';
  return (<img src={logo} className={`${className} ${extraClass}`} alt="logo" />);
}

Logo.propTypes = {
  rotating: PropTypes.bool,
  className: PropTypes.string,
}

export default Logo;