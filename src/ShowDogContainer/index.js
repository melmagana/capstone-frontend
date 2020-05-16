import React, {Component} from 'react'
import {Modal, Button} from 'semantic-ui-react'
import './index.css'

export default class ShowDogContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}
	handleInterestClick = () => {
		console.log('add interest button clicked')

		this.props.addInterest(this.props.showDogData.id)

	}
	handleRemoveInterestClick = () => {
		console.log('remove interest button clicked')
		this.props.deleteInterest(this.props.showDogData.id)
	}
	render() {
		console.log('this is props in ShowDogContainer')
		console.log(this.props)
		return(
			<div>
				{
					this.props.showDogData.name !== undefined
					&&
					<Modal size={'small'} open={true} closeIcon onClose={this.props.closeModal}>
						<div className="ShowDogContainer">
							<div className="One">
								<img src={this.props.showDogData.image} alt="pup"/>
							</div>
							<div className="Two">
								<h1>{this.props.showDogData.name}</h1>
								<hr/>
								<p>{this.props.showDogData.gender}.</p>
								{
									this.props.loggedIn === true
									?
									<React.Fragment>
										{
											this.props.shelter === false
											?
											<React.Fragment>
												<Button onClick={this.handleInterestClick}>Add Interest</Button>
												<Button onClick={this.handleRemoveInterestClick}>Delete Interest</Button>
											</React.Fragment>
											:
											null
										}
									</React.Fragment>
									:
									null
								}

							</div>
						</div>
					</Modal>
				}
			</div>
		)
	}
}