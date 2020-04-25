import React, {Component} from 'react';
import { Jumbotron } from 'reactstrap';
import Navigation from './NavComponent';

class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Yoga and Ayurveda</h1>
                                <p>Yoga is the prana's mind that seeks for the higher evolutionary transformations. 
                                Ayurveda is its healing power
                                which seeks to unite the living systems that have already been developed.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </ React.Fragment>
        );
    }
}

export default Header;