import * as Yup from "yup"

export const ParentSchema=Yup.object({
    fatherName:Yup.string().min(3).required("enter your father name"),
    fatherPhone:Yup.string().required("enter your father phone number"),
    fatherOcupation:Yup.string().required("enter your father ocupation"),
    motherName:Yup.string().min(3).required("enter your mother name"),
    motherPhone:Yup.string().required("enter your mother phone number"),
    motherOcupation:Yup.string().required("enter your mother ocupation"),
    totalFamilyMembers:Yup.number().integer('total family member must be integer').positive("family number must be positive").required("enter your total family number"),
    totalSister:Yup.number().integer('total sister must be integer').positive('sister number must be positive'),
    totalBrother:Yup.number().integer('total brother must be integer').positive('Brother number must be positive'),
    sibilingInVersity:Yup.string().required('fill up check box'),
    parentFreedomFighter:Yup.string().required('fill up check box'),
    
})