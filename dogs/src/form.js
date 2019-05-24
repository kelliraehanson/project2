import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Form1 extends React.Component {
  render() {
    return (
        <div className="formEmail">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email:&nbsp;&nbsp;</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email..." />
        </FormGroup>
        <br/>

        <FormGroup>
          <Label for="examplePassword">Password:&nbsp;&nbsp;</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter Password..." />
        </FormGroup>
        <br/>

        <FormGroup>
          <Label for="exampleSelect">Pup I'm interested in giving a forever home:&nbsp;&nbsp;</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Blue</option>
            <option>Shadow</option>
            <option>Frank</option>
            <option>Skip</option>
            <option>Lady</option>
            <option>Alvin</option>
            <option>Archie</option>
            <option>Libby</option>
            <option>Puddy</option>
          </Input>
        </FormGroup>
        <br/>
      

        <FormGroup>
          <Label for="exampleText">Please provide a brief message with your information:&nbsp;&nbsp;</Label><br/>
          <br/>
          <div className="message">
          <Input type="textarea" name="text" id="exampleText" placeholder="Your messge here..." />
          </div>
        </FormGroup>
       <br/>

        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <br/>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Send me email updates
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    );
  }
}