import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => this.setState({ film: res }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card m-4 shadow  text-dark" style={{ width: "18rem" }}>
                <div className="card-body bg-primary border border-warning">
                    {/* <h2 className="card-title">{this.state.film.title}</h2> */}
                    <p className="card-text">{this.state.film.description}</p>
                    <p className="card-text"> Director: {this.state.film.director}</p>
                    <p className="card-text"> Producer: {this.state.film.producer}</p>
                    <p className="card-text">Released: {this.state.film.release_date}</p>
                    <p className="card-text">Rotten Tomato Score: {this.state.film.rt_score}%</p>
                    <Link to={`/films/${this.state.film.id}`}>
                        {/* <button className="btn btn-small btn-primary">See More</button> */}
                    </Link>
                </div>
            </div >
        )
    }
}

export default SingleFilm