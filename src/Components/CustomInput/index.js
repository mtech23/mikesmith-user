import React from 'react';
import "./style.css";

export const CustomInput = (props) => {
    return (
        <>
            <div className=''>
                {props.label && (
                    <label className='label'>{props.label}</label>
                )}
                <input class="mail" type={props.type} placeholder={props.placeholder} name={props.name} />
            </div>
        </>
    )
}
