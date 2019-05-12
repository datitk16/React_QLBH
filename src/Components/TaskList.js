import React, {Component} from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onchange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name]: value
        })
    }


    render() {
        var elemItem = this.props.sendTask.map((task, index) => {

            return <TaskItem
                getIndex21={this.props.getIndex1}
                DeleteID2={this.props.DeleteID1}
                key={task.id}
                index={index + 1}
                sendItemTask={task}
                Update2={this.props.Update1}


            />

        })
        var filterNameInput = this.state.filterName;
        var filterStatusInput = this.state.filterStatus;
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    value={filterNameInput}
                                    onChange={this.onchange}

                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    value={filterStatusInput}
                                    onChange={this.onchange}

                                >
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elemItem}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;