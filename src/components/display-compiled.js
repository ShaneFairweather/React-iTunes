'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _result = require('./result');

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Display = function Display(props) {
    var shortList = props.results;
    var newArray = shortList.slice(0, 15);
    var resultsList = newArray.map(function (item) {
        return _react2.default.createElement(_result2.default, { artistName: item.artistName,
            trackName: item.artistName,
            imageUrl: item.artworkUrl512,
            trackUrl: item.trackViewUrl });
    });
    return _react2.default.createElement(
        'div',
        { className: 'display' },
        resultsList
    );
};

exports.default = Display;

//# sourceMappingURL=display-compiled.js.map