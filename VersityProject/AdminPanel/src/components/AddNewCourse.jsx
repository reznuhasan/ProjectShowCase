import React, { useState } from 'react';

const AddNewCourse = ({ handleRemoveCourse,value, setSemester }) => {
    const[inputs,setInputs]=useState({
        course:"",
        teacher:"",
    })

    const handleChange = (e) => {
        setInputs(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };

    const handleBlur = () => {
        console.log(inputs.course,inputs.teacher)
        if(inputs.course!=="" && inputs.teacher!==""){
            setSemester(prevState => ({
                ...prevState,
                courseAndTeacherAndClasses: [
                    ...prevState.courseAndTeacherAndClasses,
                    {
                        "course": {
                            "courseCode": inputs.course
                        },
                        "teacherEmail": inputs.teacher
                    }
                ]
            }))
        }
       
    }
    // const removeCourse=()=>{
        
    // }
    return (
        <div>
            <input
                type="text"
                name="course"
                value={inputs.course}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='course'
            />
            <input type="text" value={inputs.teacher} name="teacher" onChange={handleChange} onBlur={handleBlur} placeholder='teacher'  />
            <button type='button' onClick={()=>handleRemoveCourse(value)}>Remove Course</button>
        </div>
    );
};

export default AddNewCourse;
