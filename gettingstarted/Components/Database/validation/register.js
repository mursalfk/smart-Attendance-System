const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.fullname = !isEmpty(data.fullname) ? data.fullname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.contact = !isEmpty(data.contact) ? data.contact : '';
  data.roll = !isEmpty(data.roll) ? data.roll : '';
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  
  if (!Validator.isLength(data.fullname, { min: 2, max: 30 })) {
    errors.fullname = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.fullname)) {
    errors.fullname = 'Full Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.contact)) {
    errors.contact = 'Contact field is required';
  }

  if (!Validator.isLength(data.contact , { min: 2, max: 30 })) {
    errors.contact = 'Contact is invalid';
  }

  if (Validator.isEmpty(data.roll)) {
    errors.roll = 'Roll Number field is required';
  }

  if (!Validator.isLength(data.roll, { min: 2, max: 30 })) {
    errors.roll = 'Roll Number is invalid';
  }

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'UserName field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
