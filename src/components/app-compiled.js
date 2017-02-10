'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _searchbar = require('./searchbar');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _display = require('./display');

var _display2 = _interopRequireDefault(_display);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            term: "lightspeed champion",
            results: []
        };
        _this.getResults = _this.getResults.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'getResults',
        value: function getResults(term) {
            var _this2 = this;

            _axios2.default.get('https://itunes.apple.com/search?term=' + term).then(function (response) {
                console.log("success");
                console.log(response.data.results[0].trackName);
                _this2.setState({ results: response.data.results });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var itunesSearch = _lodash2.default.debounce(function (term) {
                _this3.getResults(term);
            }, 300);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_title2.default, null),
                _react2.default.createElement(_searchbar2.default, { getResults: function getResults(term) {
                        return _this3.getResults(term);
                    } }),
                _react2.default.createElement(_display2.default, { results: this.state.results })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

//# sourceMappingURL=app-compiled.js.map