import React, {useState, useEffect} from 'react';
import './playStart.css';
import {ADD_STUDENT_DATA} from '../../queries';
import {useMutation} from "@apollo/react-hooks";
import Cookies from "js-cookie";



const StudentForm = (props) => {

    const [triggerMutation, { data }] = useMutation(ADD_STUDENT_DATA);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
    
    useEffect(() => {
        setIsButtonDisabled(phoneNumber === null || phoneNumber === '' || isNaN(parseInt(phoneNumber) || showPhoneNumberError));
    }, [phoneNumber, showPhoneNumberError]);

    const formHandler = (e) => {
        if (!((phoneNumber.length !== 10) || (parseInt(phoneNumber).toString().length !== phoneNumber.length))) {
            e.preventDefault();
            const phone = e.target.elements.phone.value;
            const branch = e.target.elements.branch.value;
            const year = e.target.elements.year.value;
            triggerMutation({
                variables : {ID : Cookies.get('user_id'),
                    phone : phone,
                    branch : branch,
                    year : year}
            });
            props.setFormFilled(true);
        }
        else {
            e.preventDefault();
            setShowPhoneNumberError(true);
        }
    };
    
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        if (showPhoneNumberError) {
            if (!((phoneNumber.length !== 10) || (parseInt(phoneNumber).toString().length !== phoneNumber.length))) {
                setShowPhoneNumberError(false);
            }
        }
    };


    return (
        <div className={'formWrapper'}>
            <form className={'studentForm'} onSubmit={(e) => formHandler(e)}>
                {(isButtonDisabled) ? <p className={'studentFormWarn'}>Please fill all fields to continue<span className={'formStar'}>*</span></p>:null}
                <div className={'studentFormPhone'}>
                    <label className={'studentFormLabel'}>Phone<sup className={'formStar'}>*</sup>  </label>
                    <input onChange={handlePhoneNumberChange} maxLength={10} type="number" id="phone" name="phone" className={'studentFormPhoneInput'} placeholder={'Phone Number without +91'}/>
                    {(showPhoneNumberError) ? <p className={'studentFormWarn'}>This doesn't look like a phone number<span className={'formStar'}>!</span></p>:null}
                </div>
                <div className={'studentFormBranch'}>
                    <label className={'studentFormLabel'}>Branch<sup className={'formStar'}>*</sup></label>
                    <select id="branch" name="branch" className={'studentFormBranchInput'} >
                        <option value={'CSE'}>CSE</option>
                        <option value={'ECE'}>ECE</option>
                        <option value={'ME'}>ME</option>
                        <option value={'EEE'}>EEE</option>
                        <option value={'IT'}>IT</option>
                    </select>
                </div>
                <div className={'studentFormYear'}>
                    <label className={'studentFormLabel'}>Year<sup className={'formStar'}>*</sup></label>
                    <select id="year" name="year" className={'studentFormYearInput'} >
                        <option value={'First'}>First</option>
                        <option value={'Second'}>Second</option>
                        <option value={'Third'}>Third</option>
                        <option value={'Fourth'}>Fourth</option>
                        <option value={'MTech1'}>MTech First</option>
                        <option value={'MTech2'}>MTech Second</option>
                    </select>
                </div>
                <button type={'submit'} disabled={isButtonDisabled} className={`button start-button studentFormButton ${isButtonDisabled?`disabledButton`:``}`} value={'Next'}>Next</button>
            </form>
        </div>
    );
};

export default StudentForm;
