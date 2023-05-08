import React, { useState } from "react";
import './AddTask.css'
import Button from "../Botao/Button";

const AddTask = ({ handleTaskAddition }) => {
    const [inputDate, setInputData] = useState('');

    const handleInputChange = (e) =>
        setInputData(e.target.value);

    const handleAddTaskClick = () => {
        handleTaskAddition(inputDate);
        setInputData('');
    };

    return (
        <div className="add-task-container">
            <input
                className="add-task-input"
                type="text"
                onChange={handleInputChange}
                value={inputDate} />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
};



export default AddTask;