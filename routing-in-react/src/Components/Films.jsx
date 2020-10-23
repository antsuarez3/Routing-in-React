import React, { Component } from "react";
import FilmCard from "./FilmCard";
import { v4 as uuidv4 } from 'uuid';

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(res => this.setState({ films: res }))
            .catch(err => console.log(err));
    }

    render() {
        return this.state.films.map(film => <FilmCard film={film} key={uuidv4()}/>)
    }
}

export default Films