'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNaverMap = require('react-naver-map');

var _reactNaverMap2 = _interopRequireDefault(_reactNaverMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Map.js';


var Map = function (_React$Component) {
  (0, _inherits3.default)(Map, _React$Component);

  function Map() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).call.apply(_ref, [this].concat(args))), _this), _this.clientId = 'LUIPzqCRXRTILrs7cQxw', _this.state = {
      lat: 37.4982445,
      lng: 127.0343027
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Map, [{
    key: 'onMapClick',
    value: function onMapClick(event) {
      console.log('on Map Click');
      console.log(event);
    }
  }, {
    key: 'onInit',
    value: function onInit(map, naver) {
      console.log('onInit');
      console.log(map);
      console.log(naver);
    }
  }, {
    key: 'onBoundChange',
    value: function onBoundChange(bounds) {
      console.log('bounds');
      console.log(bounds);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNaverMap2.default, {
        clientId: this.clientId,
        style: { width: '500px', height: '500px' },
        initialPosition: { lat: this.state.lat, lng: this.state.lng },
        initialZoom: 12

        // onInit={(map, naver) => {this.onInit(map,naver)}}  // map: naver map object, naver: window.naver object
        // onBoundChange={(bounds) => {this.onBoundChange(bounds)}}  // bounds: naver.maps.LatLngBounds
        // onMapClick={(event) => {this.onMapClick(event)}}  // event: PointerEvent 
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      });
    }
  }]);

  return Map;
}(_react2.default.Component);

exports.default = Map;