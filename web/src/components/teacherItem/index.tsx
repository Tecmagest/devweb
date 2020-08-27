import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

import './styles.css';


export interface Teacher {
        id: number;
        name: string;
        avatar: string;
        bio: string;
        cost: number;
        subject: string;
        whatsapp: string;
}

interface TeacherItemPropos {
    teacher: Teacher;
}
const TeacherItem: React.FunctionComponent<TeacherItemPropos>  = ({teacher}) => {
    
    function createNewConnection() {
        api.post('connections', { user_id: teacher.id, })
    }
    return (
        <article className="teacher-item">
        <header> 
            <img src={teacher.avatar}alt={teacher.name}/>
             <div> 
                 <strong>{teacher.name}</strong>
                 <span>{teacher.subject}</span> 
             </div>
        </header>
        <p>{teacher.bio}</p>
    <footer>
            <p>Preço Por Hora
            <strong>$ {teacher.cost}</strong>
            </p>
                <a target ="_black" 
                onClick = {createNewConnection} 
                href= {'https://wa.me/${teacher.whatsapp}'}>
                < img src = {whatsappIcon} alt ="whatsapp" />
                Entre em contacto.
                </a>
        </footer>
    </article>
    );
}
export default TeacherItem;