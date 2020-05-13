import React, {Component} from 'react'
import DogList from '../DogList'

export default class DogContainer extends Component {
	constructor() {
		super()

		this.state = {
			dogs: []
		}
	}
	componentDidMount() {
		this.getDogs()
	}
	getDogs = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/dogs/'
			const dogsResponse = await fetch(url, {
				credentials: 'include'
			})
			console.log('dogsRespnse', dogsResponse)
			const dogsJson = await dogsResponse.json()
			console.log('dogsJson', dogsJson)

			this.setState({
				dogs: dogsJson.data
			})
		} catch(err) {
			console.error('Error getting dogs from API')
			console.error(err)
		}
	}
	render() {
		return(
			<div className='DogContainer'>
				<h2>All Dogs</h2>
				<DogList dogs={this.state.dogs}/>
			</div>
		)
	}
}