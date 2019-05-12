import React, {Component} from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }

    }

    componentWillMount() {
        if (this.props.TaskEditing) {
            this.setState({
                id: this.props.TaskEditing.id,
                name: this.props.TaskEditing.name,
                status: this.props.TaskEditing.status
            })
            console.log(this.state)
        }


    }


    onChange = (event) => {
        var nameForm = event.target.name;
        var valueForm = event.target.value;
        if (nameForm === "status") {
            valueForm = event.target.value === "true" ? true :  false

        }

        this.setState({
            [nameForm]: valueForm
        })

    }
    onSubmit = (event) => {

        this.props.onSubmit(this.state)
        // console.log(this.state)
        this.onClear()
        // console.log(event)
        event.preventDefault();


    }
    onClear = () => {
        this.setState({

            name: '',
            status: false
        })
    }

    render() {
        var id = this.state.id;
        console.log(id)

        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="panel-body">

                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Tên :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}


                                        />
                                    </div>
                                    <label>Trạng Thái :</label>
                                    <select
                                        className="form-control"
                                        value={this.state.status}
                                        onChange={this.onChange}

                                        name="status"
                                    >
                                        <option value={true}>Kích Hoạt</option>
                                        <option value={false}>Ẩn</option>
                                    </select><br/>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning">
                                            Lưu Lại
                                        </button>
                                        &nbsp;
                                        <button type="button" onClick={this.onClear} className="btn btn-danger">
                                            Hủy Bỏ
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;