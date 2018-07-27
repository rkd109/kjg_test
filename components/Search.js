import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchAction from '../Store/modules/Search'

class Search extends Component {
	componentDidMount() {
		// const { number , searchAction } = this.porps;
		// searchAction.getPost(number);
	}

	componentWillReceiveProps(nextProps){
		// const { searchAction } = this.porps;
		// if(this.props.number !== nextProps.number){
		// 	searchAction.getPost(nextProps.number)
		// }
	}

	render(){
		// const { post, error, loading } = this.props;

		return(
			<div>
				{/* <button onClick={this.search}>검색</button> */}
			</div>
		)
	}

}
export default connect (
	(state) => ({
		// post : state.post.data,
		// loading: state.post.pending,
		// error: state.post.error
	}),
	(dispatch) => ({
		// SearchAction : bindActionCreators(searchAction, dispatch)
	})
)(Search);
