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

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Search = require('../Store/modules/Search');

var searchAction = _interopRequireWildcard(_Search);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\00.Project\\001.kjg\\001. Source\\hello-next\\components\\Search.js';


var Search = function (_Component) {
	(0, _inherits3.default)(Search, _Component);

	function Search() {
		(0, _classCallCheck3.default)(this, Search);

		return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).apply(this, arguments));
	}

	(0, _createClass3.default)(Search, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// const { number , searchAction } = this.porps;
			// searchAction.getPost(number);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// const { searchAction } = this.porps;
			// if(this.props.number !== nextProps.number){
			// 	searchAction.getPost(nextProps.number)
			// }
		}
	}, {
		key: 'render',
		value: function render() {
			// const { post, error, loading } = this.props;

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			});
		}
	}]);

	return Search;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		// post : state.post.data,
		// loading: state.post.pending,
		// error: state.post.error
	};
}, function (dispatch) {
	return {
		// SearchAction : bindActionCreators(searchAction, dispatch)
	};
})(Search);