import React from 'react';
import {Modal, Table, Button, Popconfirm} from 'antd';
import NewEmployeeForm from '../components/form/NewEmployeeForm';
import Header from '../components/header';
import { constantsColumns } from "../constants/columns";


import { connect } from 'react-redux';
import { fetchEmployees, deleteEmployee } from "../actions/employeeActions";


const mapDispatchToProps = (dispatch)=> ({
    fetchEmployees: dispatch(fetchEmployees()),
        deleteEmployee: (employeeId) => {
        dispatch(deleteEmployee(employeeId));
    }
});

const mapStateToProps = (state) => ({

        employees: state.employees

});

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.columns =  constantsColumns.concat([{
            title: 'Operation',
            dataIndex: 'operation',
            render: (text, record) =>
                <Popconfirm title="Are you sure you want to delete?"
                            onConfirm={() => this.handleDelete(record.id)}>
                    <a>Delete</a>
                </Popconfirm>
        }]);
        this.state = {
            visible: false,
        };
    }

    handleDelete = (key) => {
        this.props.deleteEmployee(key);

    };

    handleAdd = () => {
        this.setState({
            visible: true,
        });
    };

    handleSave = (row) => {
        const newData = [...this.props.employees];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
    };

    componentDidMount() {
        console.log(this.props.employees);
    }

   

    onSave = () => {
        this.setState(Object.assign({}, { visible: false }))
    }


    render() {

        return (
            < div>
                <Header></Header>


                <Table
                    size="small"
                    columns={this.columns}
                    dataSource={this.props.employees}
                    bordered
                    title={() => <Button onClick={this.handleAdd} type="primary"> Add a row </Button>}
                    rowKey={(record => {
                        return record.id;
                    })}
                />


                {this.state.visible &&
                    <Modal
                        title="Fill the New Employee Form"
                        visible={this.state.visible}
                        onCancel={() => this.setState({ visible: false })}
                        destroyOnClose={true}
                        footer={null}
                    >
                        <NewEmployeeForm ifVisible={this.state.visible} onSave={this.onSave}></NewEmployeeForm>
                    </Modal>}


            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);