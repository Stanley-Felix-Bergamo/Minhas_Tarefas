import React from "react";
import Button from "../Botao/Button";

const TaskDetails = () => {
    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p></p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    debitis illum facilis, dicta non corporis perspiciatis voluptates,
                    saepe itaque labore mollitia. Obcaecati nesciunt odit aut et laborum
                    velit nemo maxime?
                </p>
            </div>
        </>
    );
};

export default TaskDetails;
