import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from './axiosWithAuth';

const Login = () => {
  return (
    <Form className="App" style={{ width: 400 }}>
      <div className="form-group">
        <label className="label">UserName</label>
        <Field
          className="input"
          name="username"
          type="text"
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label className="label">Password</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
      </div>

      <button className="btn" type="submit">
        Submit &rarr;
      </button>
    </Form>
  );
};

// formik needs to be called twice
// the first time you give it and object
// mapProps to Values returns the initial state
export default withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: ''
    };
  },

  // we need to post the values from the form to the server, and set the token
  // to local storage.
  handleSubmit(values, formikBag) {
    // console.log(formikBag.props);

    axiosWithAuth()
      .post('/login', values)
      .then(response => {
        //sets token to local storage.
        localStorage.setItem('token', response.data.payload);
        // forwards the user to the profile page using the formikBag props
        formikBag.props.history.push('/bubbles_page');
      })
      .catch(err => {
        console.log(err.response.data);
      });
    // console.log(values);
  }
})(Login);
