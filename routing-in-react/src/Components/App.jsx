import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import SingleFilm from "./SingleFilm";
import GhibliLogo from '../assets/logo.png'
import SinglePerson from './SinglePerson'
//import PersonCard from './PersonCard';
import People from './People'
//import NavBar from './Components/NavBar';

class App extends Component {
    render() {

        return (
            <Router>
                <Fragment>
                <img src={GhibliLogo} alt="Studio Ghibli Logo" className="border border-danger shadow" />
                <img src={GhibliLogo} alt="Studio Ghibli Logo" className="border border-danger shadow float-right" />
                    <Link to="/home">
                    
                        <button className="mx-4 text-warning btn btn-outline-dark btn-sm">
                            <p>Go Home</p>
                        </button>
                    </Link>
                    <Link to="/films">
                        <button className="mx-4 text-primary btn btn-outline-dark btn-sm">
                            <p>View Films</p>
                        </button>
                    </Link>
                    <Link to="/people">
                        <button className="mx-4 text-info btn btn-outline-dark btn-sm">
                            <p>View Actors</p>
                        </button>
                    </Link>
                    
                    <Switch>
                        {/* <Route exact path="/home" component={HomeCard}/> */}
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component={SingleFilm} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/:id" component={SinglePerson} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;
