'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function Result(props) {
    function parseTime(milliseconds) {
        var minutes = Math.floor(milliseconds / 60000);
        var seconds = (milliseconds % 60000 / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    return _react2.default.createElement(
        'div',
        { className: 'result', onClick: function onClick() {
                return props.onItemSelect(props);
            } },
        _react2.default.createElement(
            'div',
            { className: 'itunesButton' },
            _react2.default.createElement(
                'button',
                null,
                'View on iTunes.com'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'resultImg' },
            _react2.default.createElement('img', { src: props.imageUrl }),
            _react2.default.createElement('div', { className: 'clearBox' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'resultInfo' },
            _react2.default.createElement(
                'h3',
                null,
                props.trackName
            ),
            _react2.default.createElement(
                'h5',
                null,
                props.artistName
            ),
            _react2.default.createElement(
                'p',
                { className: 'runTime' },
                parseTime(props.trackTime)
            ),
            _react2.default.createElement(
                'p',
                null,
                props.releaseDate.slice(0, 4)
            )
        )
    );
};

exports.default = Result;

//# sourceMappingURL=result-compiled.js.map