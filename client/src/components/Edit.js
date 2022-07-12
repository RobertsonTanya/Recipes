import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Edit = (props) => {
    const { featuredRecipe } = props;
    
    return (
        <div>
            <Header featuredRecipe={featuredRecipe} />
            Edit Recipe
        </div>
    )
}

export default Edit;