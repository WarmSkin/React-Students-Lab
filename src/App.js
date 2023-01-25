import './App.css';
import { useState } from 'react';
import studentData from './studentData';
import Student from './Student';

function App() {
  const [students, setStudentData] = useState(studentData)
  

  return (
    <div className='student-info'>
      {students.map((student,index) =>
        <Student key={index} student={student}/>
       )}
    </div>
  )
}

export default App;
