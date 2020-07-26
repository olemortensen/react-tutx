import React from 'react';
import {useParams} from "react-router-dom";

export default function Main() {
    let { id } = useParams();
        return (
            <div>
                Hello main with id: {id}
            </div>
        );
}