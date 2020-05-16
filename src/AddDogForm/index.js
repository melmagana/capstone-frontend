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
			status: '',
			image: ''
		}
	}
	selectedFileHandler = async (event) => {
		console.log(event.target.files)
		const files = event.target.files
		const data = new FormData()
		const url = 'https://api.cloudinary.com/v1_1/drviocy9n/image/upload'
		data.append('file', files[0])
		data.append('upload_preset', 'tfiodrbf')

		const uploadImageResponse = await fetch(url, {
			method: 'POST',
			body: data
		})
		
		const file = await uploadImageResponse.json()

		this.setState({
			image: file.secure_url
		})
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
			status: '',
			image: ''
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
						type='text'
						name='date_arrived'
						value={this.state.date_arrived}
						placeholder='YYYY-MM-DD'
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
					<label>Image</label>
					<input
						type='file'
						name='image'
						onChange={this.selectedFileHandler}
					/>
					<button type="Submit">Add Dog</button>
				</form>
			</div>
		)
	}
}