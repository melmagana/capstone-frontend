import React, {Component} from 'react'
import UserInterestsList from '../UserInterestsList'

export default class UserInterests extends Component {
	constructor(props) {
		super(props)

		this.state = {
			interests: [],
			currentUser: props.currentUser
		}
	}
	componentDidMount() {
		this.getInterests(this.state.currentUser.id)
	}
	getInterests = async (id) => {
		console.log('id for get interest', id)

		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/users/interests/' + id
			const getInterestsResponse = await fetch(url, {
				credentials: 'include',
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('getInterestsResponse', getInterestsResponse)
			const getInterestsJson = await getInterestsResponse.json()
			console.log('getInterestsJson', getInterestsJson)

			this.setState({
				interests: getInterestsJson.data
			})
		} catch(err) {
			console.error('Error getting interest information')
			console.error(err)
		}
	}
	render() {
		return(
			<div className="UserInterests">
				<UserInterestsList
					interests={this.state.interests} 
				/>
			</div>
		)
	}
}