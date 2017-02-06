import React from 'react'

var Display  = React.createClass({
	renderStart : function(){
		return(
				<div id="winner">
					<h3>Lets Play!!</h3>
				</div>
		);
	},

	/*showFunction:function(){
		console.log("In Show Function");
		setTimeout(function(){
			{this.props.cap}
		},3000);
	},*/

	renderContinue:function(){
		return(
				<div id="winner">
					<h3>Continue</h3>
				</div>
		);
	},

	renderWinner:function(){
		return(
				<div id="winner">
					<h3>Winner = {this.props.wins}</h3>
				</div>
		);
	},

	renderDraw : function(){
		return(
			<div id="winner">
				<h3>Result is Draw </h3>
			</div>
		);
	},

	render:function(){
		if(this.props.counter==0)
			return this.renderStart();
		else if((this.props.counter!=0) && (this.props.counter < 9))
			return this.renderContinue();
		else if((this.props.counter > 8) && (this.props.wins=='0'))
			return this.renderDraw();
		else
		{
			return this.renderWinner();
		}
	}
});

export default Display;
