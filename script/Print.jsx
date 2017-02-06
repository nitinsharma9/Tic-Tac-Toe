import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

var Square = React.createClass({

	change:function(){
		console.log("Index = "+this.props.index);
		this.props.update(this.props.index);
	},

	render:function(){
		return(
			<div>
        <Grid>
          <Row className="show-grid">
    				<Col lg={12} visibleLgBlock >
    					<div id="square" onClick={this.change}>
    						<div id="text">{this.props.val}</div>
    					</div>
    				</Col>
    			</Row>
        </Grid>
      </div>
		);
	}
});

export default Square;
