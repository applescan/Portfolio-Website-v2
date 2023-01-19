import React from 'react'

export default function List(props) {
    return (
        <div>
            <br></br>
            <br></br>
            <h1 className='font25 extraBold'>{props.title}</h1>
            <br></br>
            <h4>{props.desc}</h4>
            <br></br>
            <ol>
                <li>
                    <p>{props.list1}</p>
                </li>
                <li>
                    <p>{props.list2}</p>
                </li>
                <li>
                    <p>{props.list3}</p>
                </li>
                <li>
                    <p>{props.list4}</p>
                </li>
                <li>
                    <p>{props.list5}</p>
                </li>
                <li>
                    <p>{props.list6}</p>
                </li>
                <li>
                    <p>{props.list7}</p>
                </li>
            </ol>
        </div>
    )
}
