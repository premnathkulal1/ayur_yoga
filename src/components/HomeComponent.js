import React, { Component } from 'react';
import Header from './HeaderComponent';

class HomeComponent extends Component {

  render(){ 
    return (
        <div>
            <Header />
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div className="home_content1">
                        <strong>
                            Medicinal plants, also called medicinal herbs, have been discovered 
                            and used in traditional medicine practices since prehistoric times.
                            Get to know about medicinal plants.
                        </strong>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="home_content2">
                        <strong>
                        Yoga is a group of physical, mental, and spiritual 
                        practices or disciplines which originated in ancient India.
                        Get to know about Yoga.
                        </strong>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12">
                    <center>
                        <p>
                            <strong>
                                Ayurveda and Yoga are two sides of the same coin! 
                                These ancient sciences are both the study of life. Ayurveda is
                                considered the study of the functions of the body, while yoga
                                traditionally has to do with the study of the mind and spiritTruth 
                                is, Ayurveda and Yoga are two sides of the same coin! These ancient 
                                sciences are both the study of life. Ayurveda is considered the study 
                                of the functions of the body, while yoga traditionally has 
                                to do with the study of the mind and spirit.
                            </strong>
                        </p>
                    </center>
                </div>
            </div>
        </div>
         </div>
    );
  }
}

export default HomeComponent;