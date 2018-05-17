import React from 'react'

export default function HistoryList({ history, deleteRecord }) {
    return <div>
        <ul>
            {history.map(item => <li key={item.name}>
                <h4>{item.id}</h4>
                <h4>{item.name}</h4>
                <p>{item.soilType}</p>
                <p>{item.phLevel}</p>
            </li>
            )}
        </ul>
    </div>
}
