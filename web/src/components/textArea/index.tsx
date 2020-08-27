import React, { TextareaHTMLAttributes } from 'react';
import './styles.css';
interface TextareaPropos extends TextareaHTMLAttributes <HTMLTextAreaElement>  {
    name:string;
    label: string;

} 
const Textarea:React.FunctionComponent<TextareaPropos> = ({ name,label, ...rest}) => {

return (
    <div id="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea  id={name} {...rest} />
</div>  
);
}
export default Textarea;