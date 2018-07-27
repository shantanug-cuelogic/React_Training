import React ,{ Component } from 'react';

import Aux from '../Aux';
import Modal from '../../component/UI/Modal/Modal';

const withErrorHandler =(WrappedComponents,axios) =>{
    return class extends Component {
        state ={
            error: null,
        }
        
        componentDidMount() {

            axios.interceptors.request.use(req=>{
                this.setState({error:null});
            });
            axios.interceptors.response.use (null, error => {
                this.setState({error:error});
            });
        }

        errorHandler = () => {
            this.setState({error:null});
        }
        
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                    clicked ={this.errorHandler}

                    >
                    {this.state.error ? this.state.error.message : null}

                    
                     </Modal>
                      <WrappedComponents {...this.props} />
                </Aux>
            ); 
        }
    }
}

export default withErrorHandler;
