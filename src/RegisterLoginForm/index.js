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
			shelter: false,
			action: 'Login'
		}
	}
	switchForm = () => {
		if(this.state.action === 'Login') {
			this.setState({
				action: 'Register'
			})
		} else {
			this.setState({
				action: 'Login'
			})
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		if(this.state.action === 'Register') {
			this.props.register(this.state)
		} else {
			this.props.login(this.state)
		}
	}
	render() {
		return(
			<div className='RegisterLoginForm'>
				<h2>{this.state.action}</h2>
				<form onSubmit={this.handleSubmit}>
				{
					this.state.action === 'Register'
					&&
					<div>
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
					</div>
				}
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
					{
						this.state.action === 'Register'
						&&
						<div>
							<div>
								<label>Shelter?</label>
								<input
									type='checkbox'
									name='shelter'
									value={this.state.shelter}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					}
					<button type='Submit'>
						{this.state.action === 'Login' ? 'Log In' : 'Sign Up'}
					</button>
				</form>
				{
					this.state.action === 'Login'
					?
					<p>
						Not a member? Sign Up <span onClick={this.switchForm}>Here</span>
					</p>
					:
					<p>
						Already a member? Log In <span onClick={this.switchForm}>Here</span>
					</p>
				}
			</div>
		)
	}
}