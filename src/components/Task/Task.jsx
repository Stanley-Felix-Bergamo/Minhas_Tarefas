import { useHistory } from 'react-router-dom';
import { CgClose, CgInfo } from 'react-icons/cg';
import React from "react";

import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();
    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
        setTimeout(() => {
            document.location.reload(true);
        }, 1000);
    }
    return (
        <div className="task-container"
            style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="remove-task-button"
                    onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose />
                </button>
                <button className="see-task-details-button"
                    onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </button>
            </div>
        </div>
    );
};

export default Task;