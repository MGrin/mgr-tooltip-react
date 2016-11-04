# mgr-tooltip-react
Simple react component for tooltips. A tooltip content can be any React component and is styled by yourself.

# How to install
```
npm install mgr-tooltip-react --save
```

# How to use

Since it is a React module, I suppose you have the webpack and bable configured.

```js
import React from 'react';
import Tooltip from 'mgr-tooltip-react';

const ExampleComponent = () => {
  const TooltipContent = (<div id="exampleTooltip" className="my-tooltip-style">
    <p>Here is your tooltip content component</p>
  </div>);
  
  return (<div>
    <Tooltip
      tooltip={TooltipComponent}
      placement="left"
      tooltipId="exampleTooltip"
      parentId="exampleParent">
      <div id="exampleParent" className="my-parent-element-style">
          <p>Here is the content which should be hovered to show the tooltip</p>
      </div>
    </Tooltip>
  </div>);
}
```

Note the presence of id inside the tooltip body component as well as in the tooltip parent component - this is mandatory for the tooltip positionnment.

# Documentation
## Usage
`Tooltip` works as a wrapper for your component and shows the tooltip on mouse hover on its child element. Child element should be wrapper by a `div` with a unique `id` field, named `parentId`.
The tooltip content is passed as a propery to the `Tooltip` component. The tooltip wrapper component should also have an `id` named tooltipId.

`Tooltip` component takes following properties:
* `tooltip`: *React element*, **required**.
The component that will be rendered as a tooltip. The high order component of tis property should have an `id` name tooltipId.
* `parentId`: *String*, **required**.
The id that will be used to query the tooltip parent DOM element.
* `tooltipId`: *String*, **required**.
The id that will be used to query the tooltip content DOM element.
* `placement`: *String*. Can be `"top"`, `"bottom"`, `"left"`, `"right"`.
