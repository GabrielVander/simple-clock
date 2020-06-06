import React from "react";
import Clock from "./Clock/Clock";
import Navbar from "react-bootstrap/Navbar";

function ClockPage() {
    return (
        <div className="App">
            <div className="App-header">
                <Navbar
                    bg="transparent"
                    fixed="top"
                    className='justify-content-center'
                >
                    <Navbar.Text style={{ color: 'white' }} >
                        Simple Clock
                    </Navbar.Text>
                </Navbar>
                <Clock/>
            </div>
        </div>
    );
}

export default ClockPage;
