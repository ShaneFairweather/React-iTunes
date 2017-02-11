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
    var newArray = shortList.slice(0, 25);
    var resultsList = newArray.map(function (item) {
        return _react2.default.createElement(_result2.default, { artistName: item.artistName,
            trackName: item.trackName,
            imageUrl: item.artworkUrl100.replace('100x100', '1200x1200'),
            trackUrl: item.trackViewUrl,
            trackPrice: item.trackPrice,
            releaseDate: item.releaseDate,
            trackTime: item.trackTimeMillis,
            onItemSelect: props.getSelected,
            albumName: item.collectionName
        });
    });
    if (shortList.length == 0) {
        return _react2.default.createElement(
            'div',
            { className: 'lead' },
            'Type in the search bar to find a song'
        );
    } else {
        return _react2.default.createElement(
            'div',
            { className: 'display' },
            resultsList
        );
    }
};

exports.default = Display;

//# sourceMappingURL=display-compiled.js.map