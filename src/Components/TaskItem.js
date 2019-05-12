import React, {Component} from 'react';

// import TaskForm from "./TaskForm";
class TaskItem extends Component {

    getIndex2 = () => {
        //truyền dữ liệu Item ra app (con =>cha)
        //getIndex21 không phụ thuộc vào taskitem chỉ phụ thuộc vào taskList
        this.props.getIndex21(this.props.sendItemTask.id)
        //
    }
    delete = () => {
        //truyền dữ liệu Item ra app (con =>cha)
       // console.log(this.props.sendItemTask.id)
        this.props.DeleteID2(this.props.sendItemTask.id)
    }
    Update2=()=>{
        //truyền dữ liệu Item ra app (con =>cha)
        this.props.Update2(this.props.sendItemTask.id)
    }

    showStatusElement() {
        return (
            <span
                className={this.props.sendItemTask.status ? 'label label-danger' : 'label label-info'}
                onClick={this.getIndex2}
            >{this.props.sendItemTask.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
        );
    }

    render() {
        // var receiveItem = this.props.sendItemTask;
        // var index = this.props.index;
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.sendItemTask.name}</td>
                <td className="text-center"
                    // onClick={this.getIndex2}


                >
                    {/*{receiveItem.status == true ? 'Kích Hoạt' : 'Ẩn '}*/}
                    <td className="text-center">
                        {this.showStatusElement()}
                    </td>
                </td>
                <td className="text-center">
                    <button

                        data-toggle="modal" data-target="#exampleModal"
                        type="button"
                        className="btn btn-warning"
                        onClick={this.Update2}
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button
                        type="button" className="btn btn-danger"
                        onClick={this.delete}
                    >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;