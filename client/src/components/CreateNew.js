import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const CreateNew = (props) => {
    const { featured } = props;
    
    return (
        <div>
            <Header featured={featured} />
            New Recipe
        </div>
    )
}

export default CreateNew;