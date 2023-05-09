import React from "react";
import Button from "../Botao/Button";
import { useHistory, useParams } from "react-router-dom";
import './TaskDetails.css';


const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
        setTimeout(() => {
            document.location.reload(true);
        }, 1000);
    }

    return (
        <>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    debitis illum facilis, dicta non corporis perspiciatis voluptates,
                    saepe itaque labore mollitia. Obcaecati nesciunt odit aut et laborum
                    velit nemo maxime?
                </p>
            </div>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
        </>
    );
};

export default TaskDetails;
