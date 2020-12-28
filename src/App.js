import React from 'react'
import Navbar from './components/layout/Navbar'
import UsersItem from './components/users/UsersItem'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UsersItem />
      </div>
    )
  }
}
export default App
