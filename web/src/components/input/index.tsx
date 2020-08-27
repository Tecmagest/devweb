import React, { InputHTMLAttributes } from 'react';
import './styles.css';
interface InputPropos extends InputHTMLAttributes <HTMLInputElement>  {
    name:string;
    label: string;

} 
const Input:React.FunctionComponent<InputPropos> = ({ name,label, ...rest}) => {

return (
    <div id="imput-block">
    <label htmlFor={name}>{label}</label>
    <input type="" id={name} {...rest} />
</div>  
);
}
export default Input;