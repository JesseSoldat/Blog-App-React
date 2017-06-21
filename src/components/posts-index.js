import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostsIndex extends Component {
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
function mapStateToProps(state) {
	return { posts: state.posts};
}

export default connect(mapStateToProps)(PostsIndex);