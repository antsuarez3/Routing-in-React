import React, { Component } from "react";
import { Link } from "react-router-dom";

class SinglePerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => this.setState({ person: res }))
            .catch(err => console.log(err));
    }

    render() {
        return (
                <div className="card m-4 shadow text-light" style={{ width: "18rem" }}>
                    <div className="card-body bg-secondary border border-warning">
                        <h2 className="card-title">{this.state.person.name}</h2>
                        <p className="card-text">Age: {this.state.person.age}</p>
                        <p className="card-text">Eye Color: {this.state.person.eye_color}</p>
                        <p className="card-text">Gender: {this.state.person.gender}</p>
                        <p className="card-text">Hair Color: {this.state.person.hair_color}</p>
                        <Link to={`/people/${this.state.person.url}`}>
                            {/* <button className="btn btn-small btn-warning">See More</button> */}
                        </Link>
                    </div>
                </div >
        )
    }
}

export default SinglePerson