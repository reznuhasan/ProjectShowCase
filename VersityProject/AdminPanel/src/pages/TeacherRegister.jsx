import React, { useState } from 'react';
import Styles from "../styles/TeacherRegister.module.css";
import ImportLabel from '../components/ImportLabel.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { years, months, religions } from "../CustomData/ConstantData.jsx";
import Select from 'react-select';


const TeacherRegister = () => {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        nickName: "",
        email: "",
        dob: null,
        religion: null,
        gender: '',
        maritalStatus: '',
    });

    const [startDate, setStartDate] = useState(new Date());

    const handleChanged = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(inputs)
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        console.log(date)
        setInputs((prevState) => ({
            ...prevState,
            dob: date,
        }));
    };
    const handleReligionChange = (selectOption) => {
        setInputs((prevState) => ({
            ...prevState,
            religion: selectOption
        }))
    }

    return (
        <div className={Styles.TeacherPersonalInfo}>
            <div>
                <h1>Register for Teacher</h1>
            </div>
            <form>
                {/* Name part Start */}
                <div className={Styles.namePart}>
                    <div>
                        <ImportLabel name={"firstName"} text={"First Name"} important={true} />
                        <input type="text" name="firstName" value={inputs.firstName} onChange={handleChanged} id="" />
                    </div>
                    <div>
                        <ImportLabel name={"lastName"} text={"Last Name"} important={true} />
                        <input type="text" name="lastName" value={inputs.lastName} onChange={handleChanged} id="" />
                    </div>
                    <div>
                        <ImportLabel name={"nickName"} text={"Nick Name"} important={false} />
                        <input type="text" name="nickName" value={inputs.nickName} onChange={handleChanged} id="" />
                    </div>
                </div>
                {/* Contact Part */}
                <div className={Styles.contactPart}>
                    <div>
                        <ImportLabel name={"email"} text={"Email Address"} important={true} />
                        <input type="email" name="email" value={inputs.email} onChange={handleChanged} id="" />
                    </div>
                    <div>
                        <ImportLabel name={"contactNumber"} text={"Contact Number"} important={true} />
                        <input type="contactNumber" name="contactNumber" value={inputs.contactNumber} onChange={handleChanged} id="" />
                    </div>
                </div>

                {/* Date Of Birth */}
                <div className={Styles.datePart}>
                    <ImportLabel name={"dob"} text={"Date Of Birth"} important={true} />
                    <div className={Styles.datePicker}>
                        <DatePicker
                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                                decreaseMonth,
                                increaseMonth,
                                prevMonthButtonDisabled,
                                nextMonthButtonDisabled,
                            }) => (
                                <div
                                    style={{
                                        margin: 10,
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                        {"<"}
                                    </button>
                                    <select
                                        value={date.getFullYear()} // Use getFullYear()
                                        onChange={({ target: { value } }) => changeYear(value)}
                                    >
                                        {years.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        value={months[date.getMonth()]} // Use getMonth()
                                        onChange={({ target: { value } }) =>
                                            changeMonth(months.indexOf(value))
                                        }
                                    >
                                        {months.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                        {">"}
                                    </button>
                                </div>
                            )}
                            selected={startDate}
                            onChange={(date) => handleDateChange(date)}
                            className={Styles.datePicker}
                        />
                    </div>

                </div>
                {/* Religion Select */}
                <div>
                    <ImportLabel name={"religion"} text={"Religion"} important={false} />
                    <Select
                        className={Styles.religionSelect}
                        classNamePrefix="select"
                        defaultValue={religions[0]}
                        isLoading={isLoading}
                        isClearable={isClearable}
                        isSearchable={isSearchable}
                        name="religion"
                        options={religions}
                        onChange={handleReligionChange}
                    />
                </div>
                <div>
                    <input type="radio" name="gender" id="" />Male
                    <input type="radio" name="gender" id="" />FeMale
                    <input type="radio" name="gender" id="" />Other
                </div>
            </form>
        </div>
    );
};

export default TeacherRegister;
