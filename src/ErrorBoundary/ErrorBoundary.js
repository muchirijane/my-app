import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: null
    }

    catchError = (error, errorMessage) => {
        this.setState({ hasError: true , errorMessage: errorMessage});
    }
    render() {     
        if (this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else{
            return this.props.children
        }
        
    }
}

export default ErrorBoundary;