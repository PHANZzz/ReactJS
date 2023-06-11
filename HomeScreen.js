import React, { useState, useRef } from "react";
import Alert from '@mui/material/Alert';
import "./styleHome.css";

const HomeScreen = () => {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [gender, setgender] = useState('');
    const [salary, setsalary] = useState('');

    const [arrStaff, setarrStaff] = useState([]);

    const fnameInputRef = useRef(null);

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const HandleAdd = () => {
        if (fname === "" || lname === "" || gender === "" || salary === "") {
            setShowErrorAlert(true);
        } else {
            var person = {
                "fname": fname,
                "lname": lname,
                "gender": gender,
                "salary": salary
            };
            const arrTmp = [...arrStaff, person];
            setarrStaff([...arrTmp]);
            setfname("");
            setlname("");
            setgender("");
            setsalary("");
            fnameInputRef.current.focus();
            setShowSuccessAlert(true);
        }
    }

    return (
        <>
            <h1>Form Register</h1>
            {showSuccessAlert && (
                <Alert severity="success" color="info">
                    Staff member added successfully!
                </Alert>
            )}
            {showErrorAlert && (
                <Alert severity="error" color="info">
                    Fields cannot be empty!
                </Alert>
            )}
            <div className="FormRegister">
                <div className="staffForm">
                    Staff Form
                    <input
                        value={fname}
                        ref={fnameInputRef}
                        onChange={event => setfname(event.target.value)}
                        className="input"
                        placeholder="fname"
                    />
                    <input
                        value={lname}
                        onChange={event => setlname(event.target.value)}
                        className="input"
                        placeholder="lname"
                    />
                    <input
                        value={gender}
                        onChange={event => setgender(event.target.value)}
                        className="input"
                        placeholder="gender"
                    />
                    <input
                        value={salary}
                        onChange={event => setsalary(event.target.value)}
                        className="input"
                        placeholder="salary"
                    />
                    <button
                        className="button"
                        onClick={HandleAdd}>Add</button>
                </div>
            </div>
            <div className="listArrStaff">List Staff</div>
            {arrStaff.map((staff, index) => (
                <div key={index}>
                    <div>First Name: {staff.fname}</div>
                    <div>Last Name: {staff.lname}</div>
                    <div>Gender: {staff.gender}</div>
                    <div>Salary: {staff.salary}$</div>
                </div>
            ))}
        </>
    );
}

export default HomeScreen;
