import React, {Component} from 'react'
import './index.css'

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
				<form onSubmit={this.handleSubmit}>
				<h2>Add Dog</h2>
					<div>
						<input
							type='text'
							name='name'
							value={this.state.name}
							placeholder='dog name'
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<input
							type='text'
							name='breed'
							value={this.state.breed}
							placeholder='dog breed'
							onChange={this.handleChange}
						/>
					</div>


					<div className="GroupOne">
						<div className="Age">
							<input
								type='text'
								name='age'
								value={this.state.age}
								placeholder='dog age'
								onChange={this.handleChange}
							/>
						</div>
						<div className="Personality">
							<input
								type='text'
								name='personality_type'
								value={this.state.personality_type}
								placeholder='dog personality type'
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<input
								type='text'
								name='gender'
								value={this.state.gender}
								placeholder='dog gender'
								onChange={this.handleChange}
							/>
						</div>
					</div>


					<div className="GroupTwo">
						<div className="Status">
							<input
								type='text'
								name='status'
								value={this.state.status}
								placeholder='dog status'
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<input
								type='text'
								name='date_arrived'
								value={this.state.date_arrived}
								placeholder='date arrived (YYYY-MM-DD)'
								onChange={this.handleChange}
							/>
						</div>
					</div>


					<div className="ButtonWrap">
					<label className="NewButton" for="image">Upload</label>
						<input
							id="image"
							type='file'
							name='image'
							onChange={this.selectedFileHandler}
						/>
					</div>
					<button type="Submit">Add Dog</button>
				</form>
			</div>
		)
	}
}