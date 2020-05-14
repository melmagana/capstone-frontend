import React, {Component} from 'react'

export default class EditDogForm extends Component {
	constructor(props) {
		super(props)

		console.log('props in constructor in EditDogForm', props)

		this.state = {
			name: props.dogToEdit.name,
			breed: props.dogToEdit.breed,
			age: props.dogToEdit.age,
			gender: props.dogToEdit.gender,
			personality_type: props.dogToEdit.personality_type,
			date_arrived: props.dogToEdit.date_arrived,
			status: props.dogToEdit.status,
			image: props.dogToEdit.image
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
		this.props.updateDog(this.state)
	}
	render() {
		return (
			<div className="EditDogForm">
				<h3>Edit Dog</h3>
				<form onSubmit={this.handleSubmit}>
					<label>Name</label>
					<input
						type='text'
						name='name'
						value={this.state.name}
						placeholder='enter name'
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
					<label>Age</label>
					<input
						type='text'
						name='age'
						value={this.state.age}
						placeholder='enter age'
						onChange={this.handleChange}
					/>
					<label>gender</label>
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
					<button type='Submit'>Update Dog</button>
				</form>
			</div>
		)
	}
}