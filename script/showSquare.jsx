import React from 'react';
import Square from './PrintSquare.jsx';
import {Grid,Row,Col} from 'react-bootstrap';

var Show = React.createClass({

    eachSquare:function(value,i){
      return (
          <Col lg={4} md={4} sm={4} xs={4} className="nopad">
            <Square key={i} index={i}  val={value}  update={this.props.update} />
          </Col>
        );
    },

    render : function(){
      var rowOne=[];
      var rowTwo=[];
      var rowThree=[];
      for(var i = 0 ; i < 3 ; i++)
      {
        rowOne.push(this.eachSquare(this.props.value[i],i));
        rowTwo.push(this.eachSquare(this.props.value[i+3],i+3));
        rowThree.push(this.eachSquare(this.props.value[i+6],i+6));
      }
      return(
        <div>
          <Row className="show-grid">
              <Col md={12} lg={12} sm={12} xs={12}>
                <div id="check">
                      {rowOne}
                      {rowTwo}
                      {rowThree}
                </div>
              </Col>
          </Row>
        </div>
      );
    }

});

export default Show;
