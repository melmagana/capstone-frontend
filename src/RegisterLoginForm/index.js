import React, {Component} from 'react'

export default class RegisterLoginForm extends Component {
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
						/>
					</div>
					<div>
						<label>City</label>
						<input
							type='text'
							name='city'
							placeholder='enter city'
						/>
					</div>
					<div>
						<label>State</label>
						<input
							type='text'
							name='state'
							placeholder='enter state'
						/>
					</div>
					<div>
						<label>Country</label>
						<input
							type='text'
							name='country'
							placeholder='enter country'
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							type='email'
							name='email'
							placeholder='enter email'
						/>
					</div>
					<div>
						<label>Password</label>
						<input
							type='password'
							name='password'
							placeholder='enter password'
						/>
					</div>
					<div>
						<label>Shelter?</label>
						<input
							type='checkbox'
							name='shelter'
						/>
					</div>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}