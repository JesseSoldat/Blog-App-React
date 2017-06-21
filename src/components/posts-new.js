import React, {Component} from 'react';
import {connect} from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class PostsNew extends Component {
	renderField(field) {
		const {meta: {touched, error}} = field;
		const className=`form-group ${touched ? "has-danger" : ""}`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className="form-control" type="text" 
					{...field.inputs}/>
				<div className="text-help">
				</div>
			</div>
		)
	}
	onSubmit(values) {

	}

	render() {
		return (
			<div className="container">
				<form>
					<Field label="Title For Post"
						name="title"
						component={this.renderField}/>
					<Field label="Categories"
						name="categories"
						component={this.renderField} />
					<Field label="Post Content"
						name="content"
						component={this.renderField} />

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
				</form>
			</div>
		)
	}
}
export default reduxForm({
	form: "PostsNewForm"
})(connect(null)(PostsNew));