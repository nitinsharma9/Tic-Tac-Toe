import React from 'react';
import First from './firstPlayer.jsx';
import Second from './secondPlayer.jsx';
import Show from './showSquare.jsx';
import {Grid,Row,Col} from 'react-bootstrap';
import Display from './Display.jsx';

var LargeMedium = React.createClass({
    render:function(){
      return(
          <div>
            <Row className="show-grid">
              <Col md={12} lg={12} sm={12} xs={12}>
                  <center><h1>Tic Tac Toe</h1></center>
              </Col>
            </Row>
            <Row className="show-grid">
                <Col lg={12} md={12} sm={12} xs={12} className="name">
                  <div id="board" >
                    <Row className="show-grid">
                      <Col lg={4} md={4} sm={4} xs={4} >
                          <First playerOne={this.props.playerOne} />
                      </Col>
                      <Col lg={4} md={4} sm={4} xs={4} >
                        <Display counter={this.props.counter} wins={this.props.wins} ></Display>
                      </Col>
                      <Col lg={4} md={4} sm={4} xs={4} >
                          <Second playerTwo={this.props.playerTwo} />
                      </Col>
                    </Row>
                      <Row className="show-grid">
                          <Col lg={12} md={12} sm={12} xs={12}>
                              <Show value={this.props.value}  update={this.props.update}/>
                          </Col>
                      </Row>
                      <Row className="show-grid">
                          <Col lg={4} md={4} sm={4} xs={4} className="col-lg-offset-4 col-md-offset-4 col-sm-offset-4 col-xs-offset-4">
                            <button className="buttonReset" onClick={this.props.reset}>Reset </button>
                          </Col>
                      </Row>
                  </div>
                </Col>
            </Row>
          </div>
      );
    }
});

export default LargeMedium;
