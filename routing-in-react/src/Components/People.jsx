import React, { Component } from "react";
import PersonCard from "./PersonCard";
import { v4 as uuidv4 } from 'uuid';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then(res => res.json())
            .then(res => this.setState({ people: res }))
            .catch(err => console.log(err));
    }

    render() {
        return this.state.people.map(person => <PersonCard person={person} key={uuidv4()}/>)
    }
}

export default People