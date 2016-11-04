import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const getDOMElementFullSize = (element) => {
  const style = element.currentStyle || window.getComputedStyle(element);

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  const marginW = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  const paddingW = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  const borderW = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

  const marginH = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
  const paddingH = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  const borderH = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

  const totalWidth = width + marginW - paddingW + borderW;
  const totalHeight = height + marginH - paddingH + borderH;

  return {
    w: totalWidth,
    h: totalHeight
  };
};

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.computeTooltipStyles = this.computeTooltipStyles.bind(this);

    this.style = {
      tooltip: {
        position: 'absolute'
      }
    };
  }

  handleMouseOver() {
    this.setState({
      visible: true
    });
  }

  handleMouseEnter() {
    this.setState({
      visible: true
    });
  }

  handleMouseLeave() {
    this.setState({
      visible: false
    });
  }

  computeTooltipStyles() {
    if (!this.parent || !this.tooltip) return { visibility: 'hidden' };

    const parentSize = getDOMElementFullSize(this.parent);
    const tooltipSize = getDOMElementFullSize(this.tooltip);

    let top, left;
    switch (this.props.placement) {
      case 'top': {
        top = this.parent.offsetTop - tooltipSize.h;
        left = this.parent.offsetLeft + (parentSize.w - tooltipSize.w) / 2;

        break;
      }
      case 'bottom': {
        top = this.parent.offsetTop + parentSize.h;
        left = this.parent.offsetLeft + (parentSize.w - tooltipSize.w) / 2;

        break;
      }
      case 'left': {
        top = this.parent.offsetTop + (parentSize.h - tooltipSize.h) / 2;
        left = this.parent.offsetLeft - tooltipSize.w;

        break;
      }
      case 'right': {
        top = this.parent.offsetTop + (parentSize.h - tooltipSize.h) / 2;
        left = this.parent.offsetLeft + parentSize.w;

        break;
      }
      default: {
        throw new Error('Wrong placement value: ' + this.props.placement);
      }
    }

    return {
      visibility: this.state.visible ? 'visible' : 'hidden',
      top,
      left
    }
  }

  render() {
    if (!this.parent) {
      this.parent = document.querySelector(`#${this.props.parentId}`);
    }

    if (!this.tooltip) {
      this.tooltip = document.querySelector(`#${this.props.tooltipId}`);
    }

    const tooltipStyles = {
      ...this.style.tooltip,
      ...this.computeTooltipStyles()
    };
    const tooltip = <div
      id={this.tooltipId}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      style={tooltipStyles}>
      {this.props.tooltip}
    </div>;

    const parent = <div
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}>
      {this.props.children}
    </div>;

    return <div className="mgrtooltip" style={{display: 'inline-block'}}>
      {tooltip}
      {parent}
    </div>
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.element.isRequired,
  parentId: PropTypes.string.isRequired,
  tooltipId: PropTypes.string.isRequired,

  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

Tooltip.defaultProps = {
  placement: 'top'
};

export default Tooltip;
