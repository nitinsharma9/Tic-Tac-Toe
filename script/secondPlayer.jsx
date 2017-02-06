import React from 'react';

var Second = React.createClass({
    render : function(){
      return (
        <div id="secondPlayer">
          <h1 id="small">David</h1>
          <hr/>
          <h2 id="score">{this.props.playerTwo}</h2>
        </div>
      );
    }
});

export default Second;
