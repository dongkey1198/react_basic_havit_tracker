import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    
    handleInecrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = (name)=>{
        this.props.onAdd(name);
        console.log('habits');
    };

    render() {
        console.log('Habits');
        return (
            <>
            <HabitAddForm onAdd={this.handleAdd}/>
            <ul>
                {
                    this.props.habits.map(habit => (
                    <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleInecrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                ))}
            </ul>
            
            <button className='habits-reset' onClick = {this.props.onReset}>Reset All</button>

            </>
        );
    }
}

export default Habits;