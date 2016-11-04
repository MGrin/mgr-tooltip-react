import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from '../../../index.js'

const Test = () => {
  return <div style={{marginTop: 36}}>
    <Tooltip
      parentId="mgrtooltip-parent-top"
      tooltipId="mgrtooltip-tooltip-top"
      tooltip={<h1 id="mgrtooltip-tooltip-top">Tolltip top</h1>}
      placement="top">
      <div id="mgrtooltip-parent-top" style={{display: 'inline-block'}}>
        <img src="http://colorvisiontesting.com/images/plate%20with%205.jpg" />
      </div>
    </Tooltip>
    <Tooltip
      parentId="mgrtooltip-parent-bottom"
      tooltipId="mgrtooltip-tooltip-bottom"
      tooltip={<h1 id="mgrtooltip-tooltip-bottom">Tolltip bottom</h1>}
      placement="bottom">
      <div id="mgrtooltip-parent-bottom" style={{display: 'inline-block'}}>
        <img src="http://colorvisiontesting.com/images/plate%20with%205.jpg" />
      </div>
    </Tooltip>
    <Tooltip
      parentId="mgrtooltip-parent-left"
      tooltipId="mgrtooltip-tooltip-left"
      tooltip={<h1 id="mgrtooltip-tooltip-left">Tolltip left</h1>}
      placement="left">
      <div id="mgrtooltip-parent-left" style={{display: 'inline-block'}}>
       <img src="http://colorvisiontesting.com/images/plate%20with%205.jpg" />
      </div>
    </Tooltip>
    <Tooltip
      parentId="mgrtooltip-parent-right"
      tooltipId="mgrtooltip-tooltip-right"
      tooltip={<h1 id="mgrtooltip-tooltip-right">Tolltip right</h1>}
      placement="right">
      <div id="mgrtooltip-parent-right" style={{display: 'inline-block'}}>
        <img src="http://colorvisiontesting.com/images/plate%20with%205.jpg" />
      </div>
    </Tooltip>
  </div>
};

ReactDOM.render(
  <Test />,
  document.getElementById('App')
);
