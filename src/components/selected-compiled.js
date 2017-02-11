'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selected = function Selected(_ref) {
    var selected = _ref.selected;

    console.log(selected);
    function parseTime(milliseconds) {
        var minutes = Math.floor(milliseconds / 60000);
        var seconds = (milliseconds % 60000 / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    if (!selected) {
        return _react2.default.createElement('div', null);
    }
    return _react2.default.createElement(
        'div',
        { className: 'selected' },
        _react2.default.createElement(
            'div',
            { className: 'selectedImage' },
            _react2.default.createElement('img', { src: selected.imageUrl, alt: 'selectedimg' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'selectedContent' },
            _react2.default.createElement(
                'h3',
                null,
                selected.trackName
            ),
            _react2.default.createElement(
                'p',
                null,
                selected.artistName
            ),
            _react2.default.createElement(
                'p',
                null,
                selected.albumName
            ),
            _react2.default.createElement(
                'p',
                null,
                parseTime(selected.trackTime)
            ),
            _react2.default.createElement(
                'div',
                { className: 'selectedPrice' },
                _react2.default.createElement(
                    'p',
                    null,
                    '$',
                    selected.trackPrice
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'selectedButton' },
                _react2.default.createElement(
                    'button',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: selected.trackUrl },
                        'View on iTunes.com'
                    )
                )
            )
        )
    );
};

exports.default = Selected;

//# sourceMappingURL=selected-compiled.js.map