import React, {Component} from 'react';
import TaskForm from "./Components/TaskForm";
import TaskControl from "./Components/TaskControl";
import TaskList from "./Components/TaskList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [],
            isDisplayForm: false,
            TaskEdit: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: ''
        }
    }

//get data to only start
    componentWillMount() {

        if (localStorage && localStorage.getItem('Task')) {
            var componentWillMount = JSON.parse(localStorage.getItem('Task'));
            this.setState({
                task: componentWillMount
            })
        }
    }


    GenerateData = () => {
        var GenerateData = [
            {
                id: this.GenerateID(),
                name: 'Hoc AngularJS',
                status: true

            },
            {
                id: this.GenerateID(),
                name: 'Hoc ReactJS',
                status: false
            },
            {
                id: this.GenerateID(),
                name: 'Hoc React Native',
                status: true

            }
        ];
        localStorage.setItem('Task', JSON.stringify(GenerateData))
        this.setState(
            {
                task: GenerateData
            }
        )


    }
    //gán lại
    getIndex = (id) => {
        var taskIndex = this.state.task;
        var index = this.findIndex(id);
        if (index !== -1) {
            taskIndex[index].status = !taskIndex[index].status;
            this.setState({
                task: taskIndex
            })

        }

    }
    //tìm index
    findIndex = (id) => {
        var taskID = this.state.task;
        var result = -1;
        taskID.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }

        });
        return result;
    }


    submitForm = (data) => {
        // console.log(data);
        //cập nhật id cho taskitem mới
        data.id = this.GenerateID();
        // console.log(data)
        var taskForm = this.state.task;
        taskForm.push(data)
        // console.log(taskForm)
        this.setState({
            task: taskForm
        })
        localStorage.setItem('Task', JSON.stringify(taskForm))
        data.preventDefault()
    }
    DeleteID = (id) => {
        var taskIndex = this.state.task;
        var index = this.findIndex(id);
        if (index !== -1) {
            taskIndex.splice(index, 1)
            this.setState({
                task: taskIndex
            })
            localStorage.setItem('Task', JSON.stringify(taskIndex))
        }
    }
    Update = (id) => {
        var taskIndex = this.state.task;
        var index = this.findIndex(id);
        var TaskEdit = taskIndex[index];
        // console.log(TaskEdit)
        this.setState({
            TaskEdit: TaskEdit
        })

    }
    //search
    onFilter = (filterName, filterStatus) => {
        console.log(filterName, filterStatus)
        filterStatus = parseInt(filterStatus)
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus
            }
        })

    }
    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }


    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    }

    GenerateID() {
        return this.s4() + this.s4() + '-' + this.s4();
    }


    render() {
        var task = this.state.task;
        var {TaskEdit} = this.state;

        var elemForm = <TaskForm
            TaskEditing={TaskEdit}
            onSubmit={this.submitForm}


        />

        // console.log(this.state.task)
        var {filter} = this.state;
        console.log(filter)
        //kiem tra
        if (filter) {
            if (filter.name) {
                task = task.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                })
            }
            task = task.filter((task) => {
                if (filter.status === -1) {
                    return task;

                } else {
                    return task.status === (filter.status === 1 ? true : false)
                }
            })

        }
        var {keyword} = this.state;
        if (keyword) {
            task = task.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div>

                    </div>
                    <div className={this.isDisplayForm == true ? 'col-12' : 'col-12'}>

                        {elemForm}
                        <button type="button"
                                data-toggle="modal" data-target="#exampleModal"
                                className="btn btn-danger m-5">
                            <span className="fa fa-plus mr-5"></span>
                            Thêm Công Việc
                        </button>
                        <button type="button"
                                onClick={this.GenerateData}
                                className="btn btn-success m-5">
                            <span className="fa fa-plus mr-5"></span>
                            GenerateData
                        </button>
                        <TaskControl
                            onSearch={this.onSearch}
                        />
                        <TaskList
                            sendTask={task}
                            getIndex1={this.getIndex}
                            DeleteID1={this.DeleteID}
                            Update1={this.Update}
                            onFilter={this.onFilter}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default App;