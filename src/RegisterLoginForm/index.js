import React, {Component} from 'react'
import './index.css'

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
				<form onSubmit={this.handleSubmit}>
				<h2>{this.state.action}</h2>
				<div className='Message'>{this.props.message}</div>
				{
					this.state.action === 'Register'
					&&
					<div>
						<div>
							
							<input
								type='text'
								name='name'
								placeholder='name'
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							
							<input
								type='text'
								name='city'
								placeholder='city'
								value={this.state.city}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							
							<input
								type='text'
								name='state'
								placeholder='state'
								value={this.state.state}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							
							<input
								type='text'
								name='country'
								placeholder='country'
								value={this.state.country}
								onChange={this.handleChange}
							/>
						</div>
					</div>
				}
					<div>
						
						<input
							type='email'
							name='email'
							placeholder='email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						
						<input
							type='password'
							name='password'
							placeholder='password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					{
						this.state.action === 'Register'
						&&
						<div>
							<div>
								<input
									type='checkbox'
									name='shelter'
									value={this.state.shelter}
									onChange={this.handleChange}
								/>
								<label>Shelter?</label>
							</div>
						</div>
					}
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
					<button type='Submit'>
						{this.state.action === 'Login' ? 'LOG IN' : 'SIGN UP'}
					</button>
				</form>
			</div>
		)
	}
}