// rsi
// memo === purecomponent
import React, { memo } from 'react';

const HabitAddForm = memo((props) => {

    const inputRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = (event) =>{
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    };

    console.log('form');
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Please Enter Your Habit..."/>
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;