import * as Yup from "yup"

export const personalSchema = Yup.object({
    firstName: Yup.string().min(3).required("enter your first name"),
    lastName: Yup.string().min(3).required("enter your last name"),
    nickName: Yup.string(),
    phone: Yup.string().required("enter your phone number"),
    email: Yup.string().email("Invalid email format").required("enter your email"),
    dateOfBirth: Yup.date().required("enter your date of birth").nullable(),
    placeOfBirth: Yup.string().required("enter your place of birth"),
    gender: Yup.string().required("select your gender"),
    maritalStatus: Yup.string().required("select your marital status"),
    presentAddress: Yup.string().required("enter your present address"),
    permanentAddress: Yup.string().required("enter your permanent address"),
    nationality: Yup.string().required('Enter your nationality'),
    religion: Yup.string().required('Enter your religion'),
    nationalId: Yup.string().required('Enter your national ID'),
    passportNo: Yup.string(),
})

