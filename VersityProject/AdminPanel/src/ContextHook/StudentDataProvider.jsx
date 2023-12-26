import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

const StudentDataProvider = ({ children }) => {
    const [initialStudentData, setInitialStudentData] = useState({
        firstName: "",
        lastName: "",
        nickName: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        placeOfBirth: "",
        gender: "",
        maritalStatus: "",
        presentAddress: "",
        permanentAddress: "",
        nationality: "",
        religion: "",
        nationalId: "",
        passportNo: "",
        fatherName: "",
        fatherPhone: "",
        fatherOcupation: "",
        fatherDesignation: '',
        motherName: "",
        motherPhone: "",
        motherOcupation: "",
        motherDesignation: "",
        totalFamilyMembers: "",
        totalSister: "",
        totalBrother: "",
        sibilingInVersity: "no",
        parentFreedomFighter: "no",
        fighterCertificate: "",
    })
    useEffect(()=>{
        const loadData=()=>{
            if(localStorage.getItem("StudentData")){
                const studentData=JSON.parse(localStorage.getItem("StudentData"))
                console.log(studentData)
                setInitialStudentData(prevState=>({
                    ...prevState,
                    ...studentData,
                }))
            }else if(localStorage.getItem("StudentFamilyData")){
                const studentFamilyData=JSON.parse(localStorage.getItem("StudentFamilyData"))
                setInitialStudentData(prevState=>({
                    ...prevState,
                    ...studentFamilyData,
                }))
            }
        }
        loadData();
    },[])
    return (
        <StudentContext.Provider value={{ initialStudentData, setInitialStudentData }}>{children}</StudentContext.Provider>
    )
}

export default StudentDataProvider