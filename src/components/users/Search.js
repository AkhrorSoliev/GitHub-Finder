import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search"
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Serach"
                        className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
