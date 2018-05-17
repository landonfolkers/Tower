import React from 'react'

export default function HistoryList({ history, deleteRecord }) {
    return <div className='historylist'>
        <ul className='soillist'>
            {history.map(item => <li key={item.name}>
                <h4>ID:</h4>
                <p>{item.id}</p>
                <h4>Name:</h4>
                <p>{item.name}</p>
                <h4>Soil Type:</h4>
                <p>{item.soilType}</p>
                <h4>PH Level:</h4>
                <p>{item.phLevel}</p>
            </li>
            )}
        </ul>
    </div>
}
