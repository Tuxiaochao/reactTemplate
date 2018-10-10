import React from 'react';
import { withRouter } from 'react-router';

import {
  Row,
  Col,
  Button
} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col md={6}>
            This is a react template!
        </Col>
          <Col md={3}>
            <Button bsStyle="primary" onClick={() => this.props.history.push('/page1')}>NEXT Page</Button>
          </Col>
        </Row>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(App)