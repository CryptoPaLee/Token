import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
        <Col>Hello</Col>
        </Row>
      </Grid>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
