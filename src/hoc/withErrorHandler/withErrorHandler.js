import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount () {
            axios.interceptors.request.use( request => {
                this.setState({ error: null });
                console.log(request);
                return request;
            })
            axios.interceptors.response.use(response => response, 
                error => {
                    console.log("I want to see the error object " + error.message ); 
                    this.setState({ error: error});
                    
            })
        }
        
        errorConfirmedHandler = () => {
            this.setState({ error: null});
        }
        
        render () {
            return (
                <>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null} 
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </>
            );
        }
    }
}

export default withErrorHandler;