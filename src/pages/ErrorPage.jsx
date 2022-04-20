import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ErrorPage extends Component {
    render() {
        return (
            <div className="errorpage">
                <h1>Erreur 404 <br/> Page en maintenance!</h1>
                <Link to='/'>
                    <p>Retour à la page d'accueil</p>
                </Link>
            </div>
        );
    }
}

export default ErrorPage;