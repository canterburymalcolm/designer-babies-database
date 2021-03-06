import React from 'react';
import '../../styles/inputs.scss';

const TextInput = (props) => {
    let type = 'text';
    let placeholder = props.placeholder;
    let autoComplete = '';
    if (props.isPassword) {
        type = 'password';
        placeholder = '••••••••••';
    } else if (props.isEmail) {
        type = 'email';
        placeholder = 'Your email address';
    } else if (props.isNumber) {
        type = 'number';
        placeholder = props.placeholder ? props.placeholder : '0';
        autoComplete = 'off';
    }
    
    return (
        <div className="text-input" style={{ gridArea: props.name }}>
            <label>
                {props.desc}
                {/* display the given error message after the description*/}
                <span className="error">{props.error}</span>
            </label>
            <input
                name={props.name}
                type={type}
                value={props.value}
                placeholder={placeholder}
                onChange={props.onChange}
                min={props.min}
                max={props.max}
                autoComplete={autoComplete}
                required
            />
        </div>
    )
}

export default TextInput;