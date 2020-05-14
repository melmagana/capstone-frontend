import React from 'react'
import './index.css'

export default function Home() {
	return(
		<div className="Home">
			<aside>
				<h2>Welcome,</h2>
				<p className="BoldText">
					SHELTERS
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Suspendisse et orci nec ex mollis placerat. Maecenas at libero fermentum lacus.
				</p>
				<p className="BoldText">
					ADOPTERS
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Suspendisse et orci nec ex mollis placerat. Maecenas at libero fermentum lacus.
				</p>
			</aside>
			<div className="Two">
				<img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="puppy"/>
			</div>
			<div className="Three">
				<img src="https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="dog"/>
				<p className="ThreeText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Vivamus pharetra libero eu ultrices accumsan. Nam tempus leo ut fringilla pulvinar. 
					Suspendisse fringilla metus nec nibh ultrices condimentum. Aliquam erat volutpat. 
					Aenean nulla nunc, iaculis vel dui ac, auctor vestibulum lectus. 
					Vestibulum magna enim, volutpat semper sapien id, viverra dignissim ligula.
				</p>
			</div>
		</div>
	)
}