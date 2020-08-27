import React, { useState, FormEvent } from 'react';
import PageHeader from'../../components/pageHeader';
import TeacherItem, { Teacher} from '../../components/teacherItem';
import Input from '../../components/input';
import Select from '../../components/select';
import api from '../../services/api';
import './styles.css';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [ subject, setSubject] = useState('');
    const [ week_day, setWeekday] = useState('');
    const [ time, setTime] = useState('');

    async function searchTeachers(e:FormEvent) {
      e.preventDefault();
        const response = await api.get('classes', {
          params: {
            subject,
            week_day,
            time,
          }   
        });
        setTeachers(response.data);
    }
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os Teachers disponíveis.">
               <form id="search-teachers" onSubmit={searchTeachers}>
               <Select 
                   name="subject" 
                   label="Matéria" 
                   value = {subject}
                   onChange ={(e) => { setSubject(e.target.value)}}
                   options = {[
                       {value: 'Artes', label: 'Artes'},
                       {value: 'Biologia', label: 'Biologia'},
                       {value: 'Ciências', label: 'Ciências'},
                       {value: 'Educação Fisica', label: 'Educação Fisica'},
                       {value: 'Fisica', label: 'Fisica'},
                       {value: 'Matemática', label: 'Matemática'},
                       {value: 'Química', label: 'Química'},
                       {value: 'Geografia', label: 'Geografia'},
                       {value: 'Português', label: 'Português'},
                       {value: 'Inglês', label: 'Inglês'}, 
                   ]}
                />
                    <Select 
                   name="week_day" 
                   label="Dia da Semana" 
                   value = {week_day}
                   onChange ={(e) => { setWeekday(e.target.value)}}
                   options = {[
                       {value: '0', label: 'Domingo'},
                       {value: '1', label: 'Segunda Feira'},
                       {value: '2', label: 'Terça-Feira'},
                       {value: '3', label: 'Quarta-Feira'},
                       {value: '4', label: 'Quinat-Feira'},
                       {value: '5', label: 'Sexta-Feira'},
                       {value: '6', label: 'Sabádo'},  
                   ]}
                />
                   <Input type="time" name ="time" label ="Horário" 
                    value = {time}
                    onChange ={(e) => { setTime(e.target.value)}}
                    />
                    <button type="submit">Buscar</button>
               </form>
           </PageHeader>
           <main> 
               {teachers.map((teacher: Teacher ) => {
                   return  <TeacherItem key = {teacher.id} teacher = {teacher} />;
               } )}
        </main>
        </div>
    )
}
export default TeacherList;
