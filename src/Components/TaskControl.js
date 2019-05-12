import React, {Component} from 'react';
import TaskSearchControl from "./TaskSearchControl";
import TaskStortControl from "./TaskStortControl";

class TaskControl extends Component {
    render() {
        return (
            <div className="row mt-15">
             <TaskSearchControl onSearch={this.props.onSearch}/>
             <TaskStortControl/>
            </div>
        );
    }
}

export default TaskControl;