import React from 'react';
import { Modal, Table, Button, Popconfirm } from 'antd';
import Header from '../components/header';
import './LandingPage.css';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchPrograms, deleteProgram } from "../actions/programActions";


const mapDispatchToProps = (dispatch) => ({
    fetchPrograms: dispatch(fetchPrograms()),
    deleteProgram: (programId) => {
        dispatch(deleteProgram(programId));
    }
});

const mapStateToProps = (state) => ({

    programs: state.programs

});

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchPrograms();
        this.state = {
            visible: false,
        };
    }



    componentDidMount() {
        this.props.fetchPrograms();
    }




    render() {

        return (
            < div>
                <Header></Header>



                {this.props.programs.length ? this.props.programs.map((program, index) => (
                    <div class="card">
                        <div class="container">
                            <h4><b>{program.program_name}</b></h4>
                            <p>{program.description}</p>
                            <p>{program.tag}</p>

                            <h5 key={index}>
                                <Link to={`/programPage/${index + 1}`}>Explore {program.program_name}'s Page</Link>
                            </h5>

                        </div>
                    </div>

                ))
                    : <br />}

            </div>
        );
    }
}


export default connect(mapStateToProps, { fetchPrograms })(LandingPage);