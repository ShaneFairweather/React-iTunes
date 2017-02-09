"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function Result(props) {
    return _react2.default.createElement(
        "div",
        { className: "result" },
        _react2.default.createElement(
            "a",
            { href: props.trackUrl },
            _react2.default.createElement("img", { src: props.imageUrl }),
            _react2.default.createElement(
                "h3",
                null,
                props.artistName
            ),
            _react2.default.createElement(
                "h5",
                null,
                props.trackName
            )
        )
    );
};

exports.default = Result;

//# sourceMappingURL=result-compiled.js.map