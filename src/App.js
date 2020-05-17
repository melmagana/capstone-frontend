import React, {Component} from 'react';
import './App.css';
import RegisterLoginForm from './RegisterLoginForm'
import DogContainer from './DogContainer'
import Home from './Home'
import OurDogContainer from './OurDogContainer'
import UserInterests from './UserInterests'

export default class App extends Component {
   constructor() {
      super()

      this.state = {
         loggedIn: false,
         shelter: false,
         loggedInName: '',
         currentView: 'home',
         currentUser: {},
         message: ''

      }
   }
   register = async (registerInfo) => {
      console.log('register() in app.js called with registerInfo', registerInfo)
      const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'

      try {
         const registerResponse = await fetch(url, {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(registerInfo),
            headers: {
               'Content-Type': 'application/json'
            }
         })
         console.log('registerResponse', registerResponse)
         const registerJson = await registerResponse.json()
         console.log('registerJson', registerJson)

         if(registerResponse.status === 201) {
            this.setState({
               loggedIn: true,
               loggedInName: registerJson.data.name,
               currentView: 'home',
               shelter: registerJson.data.shelter,
               currentUser: registerJson.data,

            })
         } else {
            this.setState({
               message: registerJson.message
            })
         }

      } catch(err) {
         console.error('Error trying to register with API')
         console.error(err)
      }
   }
   login = async (loginInfo) => {
      console.log('login() in app.js called with loginInfo', loginInfo)
      const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'

      try {
         const loginResponse = await fetch(url, {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: {
               'Content-Type': 'application/json'
            }
         })
         console.log('loginResponse', loginResponse)
         const loginJson = await loginResponse.json()
         console.log('loginJson', loginJson)

         if(loginResponse.status === 200) {
            this.setState({
               loggedIn: true,
               loggedInName: loginJson.data.name,
               currentView: 'home',
               shelter: loginJson.data.shelter,
               currentUser: loginJson.data
            })
         } else{
            this.setState({
               message: loginJson.message
            })
         }
      } catch(err) {
         console.error('Error trying to login with API')
         console.error(err)
      }
   }
   logout = async () => {
      try {
         const url = process.env.REACT_APP_API_URL + '/api/v1/users/logout'
         const logoutResponse = await fetch(url, {
            credentials: 'include'
         })
         console.log('logoutResponse', logoutResponse)
         const logoutJson = await logoutResponse.json()
         console.log('logoutJson', logoutJson)

         if(logoutResponse.status === 200) {
            this.setState({
               loggedIn: false,
               loggedInName: '',
               currentView: 'login'
            })
         }
      } catch(err) {
         console.error('Error trying to logout with API')
         console.error(err)
      }
   }
   setViews = async (newView) => {
      this.setState({
         currentView: newView
      })
   }
   setMessages = async(newMessage) => {
      this.setState({
         message: newMessage
      })
   }
   render() {
      return (
         <div className="App">
            <React.Fragment>
               <div className="Navigation">
                  <span onClick={() => this.setViews('home')}>Home</span>
                  <span onClick={() => this.setViews('allDogs')}>Dogs</span>
                  {
                     this.state.loggedIn === true
                     ?
                     <React.Fragment>
                     {
                        this.state.shelter === true
                        ?
                        <span onClick={() => this.setViews('ourDogs')}>Our Dogs</span>
                        :
                        null
                     }
                     {
                           this.state.shelter === false
                           ?
                           <span onClick={() => this.setViews('myInterests')}>My Interests</span>
                           :
                           null
                        }
                        <span onClick={this.logout}>Log out</span>
                     </React.Fragment>
                     :
                     <span onClick={() => this.setViews('login')}>Log In</span>
                  }
                  {
                     this.state.loggedIn === true
                     ?
                     <div className="LoggedMessage">Logged in as&nbsp;<b>{this.state.loggedInName}</b></div>
                     :
                     null
                  }
               </div>
               <div className="Pages">
                  {
                     this.state.currentView === 'home'
                     ?
                     <Home />
                     :
                     null
                  }
                  {
                     this.state.currentView === 'allDogs'
                     ?
                     <DogContainer 
                        loggedIn={this.state.loggedIn}
                        currentUser={this.state.currentUser}
                        shelter={this.state.shelter}
                     />
                     :
                     null
                  }
                  {
                     this.state.currentView === 'myInterests'
                     ?
                     <UserInterests 
                        currentUser={this.state.currentUser}
                     />
                     :
                     null
                  }
                  {
                     this.state.currentView === 'ourDogs'
                     ?
                     <OurDogContainer />
                     :
                     null
                  }
                  {
                     this.state.currentView === 'login'
                     ?
                     <RegisterLoginForm
                        register={this.register}
                        login={this.login}
                        message={this.state.message}
                     />
                     :
                     null
                  }
               </div>
            </React.Fragment>
         </div>
      )
   }
}
