import React from 'react';
import {useNavigate} from "react-router-dom";

const Missing = () => {
    const navigate = useNavigate();
    return (
        <div>
            this page not found
            <button onClick={() => navigate(-1)}>Go back</button>

        </div>
    );
};

export default Missing;