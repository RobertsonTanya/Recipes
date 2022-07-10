import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Edit = (props) => {
    const { featured } = props;
    
    return (
        <div>
            <Header featured={featured} />
            Edit Recipe
        </div>
    )
}

export default Edit;