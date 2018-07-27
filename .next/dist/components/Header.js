'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Header.js';


var linkStyle = {
    marginRight: '1rem'
};
var Header = function Header() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, '\uD648')), _react2.default.createElement(_link2.default, { href: 'about', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, '\uC18C\uAC1C')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/ssr-test', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'SSR \uD14C\uC2A4\uD2B8')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/lunch', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, '\uC9C0\uB3C4 \uD14C\uC2A4\uD2B8')));
};

exports.default = Header;