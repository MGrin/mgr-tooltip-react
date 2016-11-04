'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDOMElementFullSize = function getDOMElementFullSize(element) {
  var style = element.currentStyle || window.getComputedStyle(element);

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  var marginW = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  var paddingW = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  var borderW = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

  var marginH = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
  var paddingH = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  var borderH = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

  var totalWidth = width + marginW - paddingW + borderW;
  var totalHeight = height + marginH - paddingH + borderH;

  return {
    w: totalWidth,
    h: totalHeight
  };
};

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = {
      visible: false
    };

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.computeTooltipStyles = _this.computeTooltipStyles.bind(_this);

    _this.style = {
      tooltip: {
        position: 'absolute'
      }
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'handleMouseOver',
    value: function handleMouseOver() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: 'computeTooltipStyles',
    value: function computeTooltipStyles() {
      if (!this.parent || !this.tooltip) return { visibility: 'hidden' };

      var parentSize = getDOMElementFullSize(this.parent);
      var tooltipSize = getDOMElementFullSize(this.tooltip);

      var top = void 0,
          left = void 0;
      switch (this.props.placement) {
        case 'top':
          {
            top = this.parent.offsetTop - tooltipSize.h;
            left = this.parent.offsetLeft + (parentSize.w - tooltipSize.w) / 2;

            break;
          }
        case 'bottom':
          {
            top = this.parent.offsetTop + parentSize.h;
            left = this.parent.offsetLeft + (parentSize.w - tooltipSize.w) / 2;

            break;
          }
        case 'left':
          {
            top = this.parent.offsetTop + (parentSize.h - tooltipSize.h) / 2;
            left = this.parent.offsetLeft - tooltipSize.w;

            break;
          }
        case 'right':
          {
            top = this.parent.offsetTop + (parentSize.h - tooltipSize.h) / 2;
            left = this.parent.offsetLeft + parentSize.w;

            break;
          }
        default:
          {
            throw new Error('Wrong placement value: ' + this.props.placement);
          }
      }

      return {
        visibility: this.state.visible ? 'visible' : 'hidden',
        top: top,
        left: left
      };
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.parent) {
        this.parent = document.querySelector('#' + this.props.parentId);
      }

      if (!this.tooltip) {
        this.tooltip = document.querySelector('#' + this.props.tooltipId);
      }

      var tooltipStyles = _extends({}, this.style.tooltip, this.computeTooltipStyles());
      var tooltip = _react2.default.createElement(
        'div',
        {
          id: this.tooltipId,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: tooltipStyles },
        this.props.tooltip
      );

      var parent = _react2.default.createElement(
        'div',
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave },
        this.props.children
      );

      return _react2.default.createElement(
        'div',
        { className: 'mgrtooltip' },
        tooltip,
        parent
      );
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  children: _react.PropTypes.node.isRequired,
  tooltip: _react.PropTypes.node.isRequired,
  parentId: _react.PropTypes.string.isRequired,
  tooltipId: _react.PropTypes.string.isRequired,

  placement: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

Tooltip.defaultProps = {
  placement: 'top'
};

exports.default = Tooltip;
