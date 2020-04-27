import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class ProblemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      message: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

    axios.post('/send_report', this.state, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    return (
      <Form validate onSubmit={this.handleSubmit}>
        <Form.Group controlId="formFullName" className="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" ref={this.name} name="name" onChange={this.onChange} required />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={this.password} name="password" onChange={this.onChange} required />
          <Form.Control.Feedback type="invalid">
            Please enter your password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={this.email} name="email" onChange={this.onChange} required />
          <Form.Control.Feedback type="invalid">
            Please enter your email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="5" ref={this.message} name="message" onChange={this.onChange} required />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default ProblemForm;
