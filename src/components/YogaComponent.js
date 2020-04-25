import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardText, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';

class YogaPage extends Component{

    constructor(props){
        super(props);
        this.state = {
        };
      }

    render(){
        const Contents_list = this.props.contents1.map((content_item) => {
            return(
                <div key={content_item.id} className="mt-3 bg-warning">
                    <Link to={`/Yoga/${content_item.id}`} >
                        <img src={content_item.imagUrl} width="100%" height="150px"/>
                    </Link>
                    <p className="text_shr">{content_item.name}</p>
                </div>
            );
        });
        
        const details = this.props.contents1[this.props.contents2];

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8">
                        <Card className="mt-5 mb-5">
                            <CardBody>
                                <CardText>
                                    <center className="card_header">{details.name}</center>
                                    <CardImg src={details.imagUrl} />
                                    <br /><br />
                                    {details.info}
                                    <br /><br />
                                    <span className="usesHeader">Good For following Problems</span>
                                    <ul>
                                        <li>{details.useFor1}</li>
                                        <li>{details.useFor2}</li>
                                        <li>{details.useFor3}</li>
                                        <li>{details.useFor4}</li>
                                    </ul>
                                    <p>
                                        <iframe allow=";" allowfullscreen="" frameborder="0" height="360" src="https://www.youtube.com/embed/En6ENh0w_4o?rel=0&amp;start=0" width="100%" ></iframe>
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div> 
                    <div className="col-12 col-sm-4">
                        <div className="container">
                            <div className="container mt-5 mb-5">
                                {Contents_list}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default YogaPage;
