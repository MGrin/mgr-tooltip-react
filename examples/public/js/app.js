import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from '../../../index.js'

class TooltipContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 id={this.props.id}>{this.props.text}</h1>
  }
}

class Test extends React.Component {
  render() {
    return <div style={{marginTop: 36}}>
      <Tooltip
        parentId="mgrtooltip-parent-top"
        tooltipId="mgrtooltip-tooltip-top"
        tooltip={<TooltipContent onShow={(update) => {console.log("show"); update()}} id="mgrtooltip-tooltip-top" text="Tolltip top" />}
        placement="top">
        <div id="mgrtooltip-parent-top" style={{display: 'inline-block'}}>
          <img src="http://colorvisiontesting.com/images/plate%20with%205.jpg" />
        </div>
      </Tooltip>
      <Tooltip
        parentId="mgrtooltip-parent-bottom"
        tooltipId="mgrtooltip-tooltip-bottom"
        tooltip={<TooltipContent id="mgrtooltip-tooltip-bottom" text="Tolltip bottom" />}
        placement="bottom">
        <div id="mgrtooltip-parent-bottom" style={{display: 'inline-block'}}>
          <img src="http://colorvisiontesting.com/images/plate%20with%205.jpg" />
        </div>
      </Tooltip>
      <Tooltip
        parentId="mgrtooltip-parent-left"
        tooltipId="mgrtooltip-tooltip-left"
        tooltip={<TooltipContent id="mgrtooltip-tooltip-left" text="Tolltip left" />}
        placement="left">
        <div id="mgrtooltip-parent-left" style={{display: 'inline-block'}}>
         <img src="http://colorvisiontesting.com/images/plate%20with%205.jpg" />
        </div>
      </Tooltip>
      <Tooltip
        parentId="mgrtooltip-parent-right"
        tooltipId="mgrtooltip-tooltip-right"
        tooltip={<TooltipContent id="mgrtooltip-tooltip-rigth" text="Tolltip right" />}
        placement="right">
        <div id="mgrtooltip-parent-right" style={{display: 'inline-block'}}>
          <img src="http://colorvisiontesting.com/images/plate%20with%205.jpg" />
        </div>
      </Tooltip>
    </div>
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('App')
);
