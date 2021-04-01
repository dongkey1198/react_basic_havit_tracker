import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount(){
        // 컴퍼넌트가 유아이상에 추가될때
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount(){
        // 컴퍼넌트가 삭제되기전에
        console.log(`habit: ${this.props.habit.name} will unmounted`);
    }

    handelIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handelDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        console.log('habit');
        const {name, count} = this.props.habit;
    
        return <>
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>

                <button className="habit-button habit-increase" onClick={this.handelIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>

                <button className="habit-button habit-decrease" onClick={this.handelDecrement}>
                    <i className="fas fa-minus-square"></i> 
                </button>

                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </>;
    }
}

export default Habit;