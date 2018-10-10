import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';

class Page1 extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row>
        <Col md={6}>This is Page1！</Col>
        <Col md={3}><Button bsStyle="primary" onClick={() => this.props.history.push('/')}>PREV Page</Button></Col>
      </Row>
    )
  }
}

export default withRouter(Page1)