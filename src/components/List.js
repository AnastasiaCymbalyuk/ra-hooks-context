import React from "react";
import Fetch from "./Fetch";

export default function List({ selectUser }) {
    const [data, isLoading, error] = Fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`
    );
 
    return (
        <div>
            {isLoading && <div> Загрузка... </div>}
            {error && <div> {error} </div>}
            {data && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id} onClick={() => selectUser(item)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}