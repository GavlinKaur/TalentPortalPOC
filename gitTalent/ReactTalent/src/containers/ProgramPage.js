import React from 'react';
import { Modal, Table, Button, Popconfirm } from 'antd';
import Header from '../components/header';
import './LandingPage.css';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchProgramById, fetchPrograms } from "../actions/programActions";



const mapDispatchToProps = (dispatch) => ({
    fetchPrograms: dispatch(fetchPrograms()),
    fetchProgramById: (ProgramId) => {
        dispatch(fetchProgramById(ProgramId));
    }
});

const mapStateToProps = (state) => ({

    programs: state.programs

});

class ProgramPage extends React.Component {
    constructor(props) {
        super(props);

    }



    componentDidMount() {
        console.log(this.props.program);
        this.props.fetchProgramById(this.props.match.params.ProgramId);


    }




    render() {

        return (
            < div>
                <Header></Header>

                <h4><b>{this.props.programs.description}</b></h4>

            </div>
        );
    }
}


export default connect(mapStateToProps, { fetchProgramById })(ProgramPage);