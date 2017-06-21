import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	render() {
		return (
		<div>
			<div className="text-xs-right">
			</div>
			<h3>Posts</h3>
			<ul className="list-group">
			</ul>
		</div>
		);
	}
}
function mapStateToProps({posts}) {
	return { posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);