import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/Button';
import Radio from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
// import Input from 'react-bootstrap/Input';
// import Label from 'react-bootstrap/Label';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';

class BundleSave extends Component {
  render() {
    return (
      <div class="BSAVE">
        <div class="BS_Middle">
          <div class="BS_Middle_RB">
            <Form>
              <fieldset>
                <Form.Group as={Row}>
                  {/* <Form.Label as="legend" column sm={2}>
                            Radios
                        </Form.Label> */}
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Hotel+flight"
                      name="formVerticalRadios"
                      id="formVerticalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="Hotel+flight+car"
                      name="formVerticallRadios"
                      id="formVerticalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label="flight+car"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                    <Form.Check
                      type="radio"
                      label="Hotel+car"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
            </Form>
          </div>
          <div class="BS_Middle_WF">
            <div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail" >
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="" placeholder="Where from?"  />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="" placeholder="Where to?"/>
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>

            <div class="BS_Middle_IF">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    {/* <Form.Label>City</Form.Label> */}
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    {/* <Form.Label>State</Form.Label> */}
                    <Form.Control as="select">
                      <option>2 Adults 1 Room</option>
                      <option>Rooms</option>
                      <option>Adults</option>
                      <option>Children</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridState">
                    <Button variant="primary" type="submit">
                    Find Your Deal
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>

            <div class="BS_Middle_Last">
              <Form>
                <Form.Row>
                  <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm="10">
                      <Form.Check label=" I only need a hotel for part of my stay" />
                    </Col>
                  </Form.Group>
                  <Col sm="10">
                    <Button variant="primary" type="submit" id="btn">See tour recommended trip</Button>
                  </Col>
                </Form.Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BundleSave;
