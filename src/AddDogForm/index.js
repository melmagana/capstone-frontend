import React, {Component} from 'react'

export default class AddDogForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			age: '',
			breed: '',
			gender: '',
			personality_type: '',
			date_arrived: '',
			status: ''
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()

		this.props.createDog(this.state)
		this.setState({
			name: '',
			age: '',
			breed: '',
			gender: '',
			personality_type: '',
			date_arrived: '',
			status: ''
		})
	}
	render() {
		return(
			<div className="AddDogForm">
				<h3>Add Dog</h3>
				<form onSubmit={this.handleSubmit}>
					<label>Name</label>
					<input
						type='text'
						name='name'
						value={this.state.name}
						placeholder='enter name'
						onChange={this.handleChange}
					/>
					<label>Age</label>
					<input
						type='text'
						name='age'
						value={this.state.age}
						placeholder='enter age'
						onChange={this.handleChange}
					/>
					<label>Breed</label>
					<input
						type='text'
						name='breed'
						value={this.state.breed}
						placeholder='enter breed'
						onChange={this.handleChange}
					/>
					<label>Gender</label>
					<input
						type='text'
						name='gender'
						value={this.state.gender}
						placeholder='enter gender'
						onChange={this.handleChange}
					/>
					<label>Personality Type</label>
					<input
						type='text'
						name='personality_type'
						value={this.state.personality_type}
						placeholder='enter personality type'
						onChange={this.handleChange}
					/>
					<label>Date Arrived</label>
					<input
						type='date'
						name='date_arrived'
						value={this.state.date_arrived}
						placeholder='enter date arrived'
						onChange={this.handleChange}
					/>
					<label>Status</label>
					<input
						type='text'
						name='status'
						value={this.state.status}
						placeholder='enter status'
						onChange={this.handleChange}
					/>
					<button type="Submit">Add Dog</button>
				</form>
			</div>
		)
	}
}