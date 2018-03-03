
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Color = function (_React$Component) {
  _inherits(Color, _React$Component);

  function Color() {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).apply(this, arguments));
  }

  _createClass(Color, [{
    key: "render",
    value: function render() {
      var style = {
        backgroundColor: this.props.hexCode
      };
      return React.createElement(
        "div",
        {
          className: "color",
          onLoad: this.props.update.bind(this, this.props.index),
          style: style },
        React.createElement(
          "p",
          { className: "color__code" },
          this.props.hexCode
        )
      );
    }
  }]);

  return Color;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this2.state = {
      colorsNum: 5,
      colors: []
    };
    for (var i = 0; i < _this2.state.colorsNum; i += 1) {
      _this2.state.colors.push({ hexCode: _this2.generateColor() });
    }
    return _this2;
  }

  _createClass(App, [{
    key: "generateColor",
    value: function generateColor() {
      return "#" + Math.random().toString(16).substr(-6);
    }
  }, {
    key: "updateColor",
    value: function updateColor(index) {
      var colors = this.state.colors.slice();
      var currentColor = this.generateColor();
      colors[index].hexCode = currentColor;
      this.setState({
        colors: colors
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "color-container" },
        this.state.colors.map(function (color, index) {
          return React.createElement(Color, {
            key: "color-" + index,
            index: index,
            update: _this3.updateColor.bind(_this3),
            hexCode: color.hexCode
          });
        })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
