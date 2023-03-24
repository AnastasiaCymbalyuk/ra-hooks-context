import React from "react";
import Fetch from "./Fetch";

export default function Details({ info }) {
    const [data, isLoading, error] = Fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    );
 
    return (
        <div>
            {isLoading && <div> Загрузка... </div>}
            {error && <div> {error} </div>}
            {data && !isLoading && (
                <div>
                    <img height="300px" alt={data.name} src={data.avatar}/>
                    <div>
                        <div>{data.name}</div>
                        <div>City: {data.details.city}</div>
                        <div>Company: {data.details.company}</div>
                        <div>Position: {data.details.position}</div>
                    </div>
                </div>
            )}
        </div>
    );
}