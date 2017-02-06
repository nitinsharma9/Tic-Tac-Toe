import React from 'react';
import Square from './PrintSquare.jsx';
import Display from './Display.jsx';
import First from './firstPlayer.jsx';
import Second from './secondPlayer.jsx';
import Show from './showSquare.jsx';
import {Grid,Row,Col} from 'react-bootstrap';
import LargeMedium from './LargeMedium.jsx';

var Winner = React.createClass({
	getInitialState : function(){
		return{
			value : ['-','-','-','-','-','-','-','-','-'],
			isChecked:[false,false,false,false,false,false,false,false,false],
			chance:true,
			result:0,
			counter:0,
			winner:'0',
			playerOne:0,
			playerTwo:0
		}
	},

	updateValue : function(i){
		var arr=this.state.value;
		var check = this.state.isChecked;
		var p = this.state.chance;
		var c = this.state.counter;
		var win = this.state.winner;
		if(!check[i] && (win==0) && (c < 10))
		{
			if(p)
			{
				p = false;
				arr[i]='X';
			}
			else
			{
				p=true;
				arr[i]='O';
			}
			check[i]=true;
			c=c+1;
		}
		console.log("Arr " + arr);
		this.setState({value:arr,isChecked:check,chance:p,counter:c})
		if(c < 9)
			this.checkWinner(arr);
		console.log(this.state.value);
	},

	edit:function(i){
		console.log("Value " + i);
		var counter=this.state.counter;
		var arr = this.state.value;
		var win = this.state.winner
		var playerOne = this.state.playerOne;
		var playerTwo = this.state.playerTwo;
		if(arr[i]=='X')
		{
			win='Ben';
			counter=10;
			playerOne=playerOne+1;
			console.log("Value = "+i+" First");
		}
		else
		{
			win='Devid';
			counter=10;
			playerTwo=playerTwo+1;
			console.log("Value = "+i+" Second");
		}
		this.setState({counter:counter,winner:win,playerOne:playerOne,playerTwo:playerTwo});
	},

	checkWinner:function(arr){
		console.log("In Check");
		if((arr[1]==arr[0]) && (arr[2]==arr[1]) && (arr[1]=='X' || arr[1]=='O')){
			this.edit(1);
		}
		else if((arr[3]==arr[4]) && (arr[5]==arr[4]) && (arr[4]=='X' || arr[4]=='O')){
			this.edit(4);
		}
		else if((arr[6]==arr[7]) && (arr[8]==arr[7]) && (arr[7]=='X' || arr[7]=='O')){
			this.edit(7);
		}
		else if((arr[0]==arr[4]) && (arr[4]==arr[8]) && (arr[0]=='X' || arr[0]=='O')){
			this.edit(0);
		}
		else if((arr[2]==arr[4]) && (arr[4]==arr[6]) && (arr[2]=='X' || arr[2]=='O')){
			this.edit(2);
		}
		else if((arr[0]==arr[3]) && (arr[3]==arr[6]) && (arr[0]=='X' || arr[0]=='O')){
			this.edit(0);
		}
		else if((arr[1]==arr[4]) && (arr[4]==arr[7]) && (arr[1]=='X' || arr[1]=='O')){
			this.edit(1);
		}
		else if((arr[2]==arr[5]) && (arr[5]==arr[8]) && (arr[2]=='X' || arr[2]=='O'))
		{
			this.edit(2);

		}
		else
		{
			if(this.state.counter > 8)
				console.log("");
		}
 	},

	reset : function(){
		var arr=this.state.value;
		var p = this.state.chance;
		var count = this.state.counter;
		var isCheck = this.state.isChecked;
		var win = this.state.winner;
		win='0';
		p=true;
		for (var i = arr.length - 1; i >= 0; i--) {
			arr[i]='-';
		}
		for(var i = isCheck.length-1; i >=0 ; i--) {
			isCheck[i]=false;
		}
		count = 0;
		console.log("In Reset");
		this.setState({value:arr,counter:count,chance:p,isChecked:isCheck,winner:win});
		console.log(this.state.isChecked);
	},

	render:function(){
		return(
			<div>
				<Grid className="container-fluid">
					<Row className="show-grid">
						<Col lg={12} md={12} sm={12} xs={12}>
								<LargeMedium playerOne={this.state.playerOne} value={this.state.value} update={this.updateValue} playerTwo={this.state.playerTwo} counter={this.state.counter} wins={this.state.winner} reset={this.reset} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

export default Winner;
