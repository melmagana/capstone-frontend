import React, {Component} from 'react'

export default class RegisterLoginForm extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
			city: '',
			state: '',
			country: '',
			email: '',
			password: '',
			shelter: false
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	render() {
		return(
			<div className='RegisterLoginForm'>
				<h2>Sign Up</h2>
				<form>
					<div>
						<label>Name</label>
						<input
							type='text'
							name='name'
							placeholder='enter name'
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>City</label>
						<input
							type='text'
							name='city'
							placeholder='enter city'
							value={this.state.city}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>State</label>
						<input
							type='text'
							name='state'
							placeholder='enter state'
							value={this.state.state}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Country</label>
						<input
							type='text'
							name='country'
							placeholder='enter country'
							value={this.state.country}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							type='email'
							name='email'
							placeholder='enter email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Password</label>
						<input
							type='password'
							name='password'
							placeholder='enter password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Shelter?</label>
						<input
							type='checkbox'
							name='shelter'
							value={this.state.shelter}
							onChange={this.handleChange}
						/>
					</div>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}