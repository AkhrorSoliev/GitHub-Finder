import React from 'react'

class Usersitem extends React.Component {
    constructor() {
        super()
        this.state = {
            id: 'id',
            login: 'wayneeseguin',
            avatar_url: 'https://avatars0.githubusercontent.com/u/18?v=4',
            html_url: 'https://github.com/wayneeseguin',
        }
    }
    render() {
        return (
            <div className="card text-conter">
                <img
                    src={this.state.avatar_url}
                    alt="avatar"
                    className="round-img"
                    style={{
                        width: '60px',
                    }}
                />

                <h2>{this.state.login}</h2> 

                <div>
                    <a href={this.state.html_url}
                        className="btn btn-dark btn-sm my-1"
                    >More</a>
                </div>

            </div>
        )
    }
}

export default Usersitem
