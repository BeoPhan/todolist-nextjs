import React, {useState} from 'react';
import PropTypes from 'prop-types';
 TodoForm.propTypes = {
    onSubmit: PropTypes.func,
    isCheckedAll: PropTypes.bool,
}; 

TodoForm.defaultProps ={
    onSubmit: null,
    isCheckedAll: false,
}

function TodoForm(props) {
    const {onSubmit, isCheckedAll} = props;
    const [value, setValue] = useState('')

    function handleValueChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if (!onSubmit) return;
        
        const formValues = {
            text: value,
            isCompleted: false,
        };
        onSubmit(formValues);
 
        //Reset form
        setValue('');
    }
    return (
        <form 
        onSubmit={handleSubmit}
        >
            <input 
            className ="new-todo"
            // type = "text"
            value = {value}
            checked = {isCheckedAll}
            onChange ={handleValueChange}
            />
        </form>
    );
}

export default TodoForm;