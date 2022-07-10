import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "./Header";

const Details = (props) => {
    const { featured } = props;

    const { id } = useParams();

    return (
        <div>
            <Header featured={featured} />
            Details
        </div>
    )
}

export default Details;