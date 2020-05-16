import React, {Component} from 'react'
import DogList from '../DogList'
import ShowDogContainer from '../ShowDogContainer'

export default class DogContainer extends Component {
	constructor() {
		super()

		this.state = {
			dogs: [],
			showDogData: '',
			currentView: 'index'
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
	getShowDog = async (id) => {
		console.log('id for showDog', id)

		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/dogs/' + id
			const showDogResponse = await fetch(url, {
				credentials: 'include',
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('showDogResponse', showDogResponse)
			const showDogJson = await showDogResponse.json()
			console.log('showDogJson', showDogJson)

			this.setState({
				showDogData: showDogJson.data
			})

		} catch(err) {
			console.error('Error getting dog information')
			console.error(err)
		}
	}
	addInterest = async (id) => {
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/dogs/interests/' + id
			const addInterestResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST'
			})
			console.log('addInterestResponse', addInterestResponse)
			const addInterestJson = await addInterestResponse.json()
			console.log('addInterestJson', addInterestJson)

			if(addInterestResponse.status === 200) {
				const dogs = this.state.dogs
				console.log(dogs)

				this.setState({
					dogs: dogs
				})
			}

		} catch(err) {
			console.error('Error adding interest to dog')
			console.error(err)
		}
	}
	deleteInterest = async (id) => {
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/dogs/interests/' + id
			const deleteInterestResponse = await fetch(url, {
				credentials: 'include',
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('deleteInterestResponse', deleteInterestResponse)
			const deleteInterestJson = await deleteInterestResponse.json()
			console.log('deleteInterestJson', deleteInterestJson)

			if(deleteInterestResponse.status === 200) {
				const dogs = this.state.dogs

				this.setState({
					dogs: dogs
				})
			}

		} catch(err) {
			console.error('Error deleting interest in dog')
			console.error(err)
		}
	}
	view = (id) => {
		if (this.state.currentView === 'index') {
			this.getShowDog(id)

			this.setState({
				currentView: 'showPage'
			})
		} else {
			this.setState({
				currentView: 'index',
				showDogData: ''
			})
		}
	}
	closeModal = () => {
		this.view()
	}
	render() {
		console.log('props in DogContainer')
		console.log(this.props)
		return(
			<div className='DogContainer'>
				<h2>All Dogs</h2>
				<DogList 
					dogs={this.state.dogs}
					getShowDog={this.showDog}
					showDogData={this.state.showDogData}
					view={this.view}
				/>
				{
					this.state.currentView === 'showPage'
					&&
					<ShowDogContainer 
						showDogData={this.state.showDogData}
						closeModal={this.closeModal}
						addInterest={this.addInterest}
						deleteInterest={this.deleteInterest}
						currentUser={this.props.currentUser}
						shelter={this.props.shelter}
						loggedIn={this.props.loggedIn}
					/>
				}
			</div>
		)
	}
}