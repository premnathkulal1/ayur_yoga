import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, ModalBody, ModalHeader, Modal } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModaluseAboutUs = this.toggleModaluseAboutUs.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModaluseAboutUs(){
        this.setState({
            isModalOpen2: !this.state.isModalOpen2
        });
    }

    render(){
        return(
            <React.Fragment >
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorient Con Fusion"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar className="ml-4">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="nav-link-name"><strong>Home</strong></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Ayurveda">
                                        <span className="nav-link-name"><strong>Ayurveda</strong></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Yoga">
                                        <span className="nav-link-name"><strong>Yoga</strong></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/" onClick={this.toggleModaluseAboutUs}>
                                        <span className="nav-link-name"><strong>About Us </strong></span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModaluseAboutUs} >
                    <ModalBody>
                            <center>
                                <h4><strong>About Me</strong></h4>
                                <img src="/assets/images/GIF/about_us.gif" width="100%"/>
                                <p className="mt-4">
                                    <strong>Premnath</strong><br />
                                    premnathkulal1998@gmail.com
                                </p>
                            </center>
                    </ModalBody>
                </Modal>
            </ React.Fragment>
        );
    }
}

export default Navigation;