import React from 'react';
import Link from "react-router-dom/es/Link";
import List from './components/List';
import './FormInput.css';

const FormInputLayout = ({ task, items, onInputChange, onAddItem, onSubmit, buildLink }) => (
    <div className="FormContainer">
        <form action="" onSubmit={onSubmit}>
            <h3>Your fave to-do list app</h3>
            <p>add the things you want to achieve soon</p>
            <input type="text" name="task" value={task}
                   onChange={onInputChange} placeholder="enter task" required />
            <button type="submit">add</button>

            <List items={items} />
        </form>



    </div>

);

export default FormInputLayout;
