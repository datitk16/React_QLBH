import React, {Component} from 'react';

class TaskSearchControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onchange = (event) => {
      var target=event.target;
      var name=target.name;
      var value=target.value;
        this.setState({

            [name]: value
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyword)
        console.log(this.state)

    }

    render() {
        var {keyword} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        name="keyword"

                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        value={keyword}
                        onChange={this.onchange}

                    />
                    <span className="input-group-btn">
                <button
                    onClick={this.onSearch}
                    className="btn btn-primary" type="button">
                    <span className="fa fa-search mr-5"></span>Tìm
                </button>
            </span>
                </div>
            </div>
        );
    }
}

export default TaskSearchControl;