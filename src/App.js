import React, { Component } from 'react';
import './App.css';

class App extends Component {

	state = {
		todos: ["Brush Teeth", "Shower"],
		todoItem: ""
	};

	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const {todoItem, todos} = this.state;

		if (todoItem) {
			this.setState({
				todos: [todoItem, ...todos],
				todoItem: ""
			});
		}
	};

  render() {
    return (
		<div>
			<input
				onChange={this.handleInputChange}
				name="todoItem"
				value={this.state.todoItem}
				type="text"
			/>
			<button disabled={this.state.todoItem === ""} type="submit" onClick={this.handleSubmit}>Submit</button>
			<ul>
				{this.state.todos.map(todo => (
					<li>{todo}</li>
				))}
			</ul>
		</div>
    );
  }
}

export default App;
