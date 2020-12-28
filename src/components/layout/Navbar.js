import React from 'react'
import GitHub from '../icons/githubicon.svg'

class Navbar extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1 >
                    <img src={GitHub} alt="github" /> GitHub Finder
                </h1>
            </nav>
        )
    }
}

export default Navbar
