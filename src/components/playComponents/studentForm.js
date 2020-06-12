import React, {useState, useEffect} from 'react';
import './playStart.css';
import {ADD_STUDENT_DATA} from '../../queries';
import {useMutation} from "@apollo/react-hooks";
import Cookies from "js-cookie";
import crypto from 'crypto';

const StudentForm = (props) => {

    const [triggerMutation, { data }] = useMutation(ADD_STUDENT_DATA);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
    const [collegeName, setCollegeName] = useState(null);
    const [showCollegeNameError, setShowCollegeNameError] = useState(false);
    const branchesArray = ['AERONAUTICAL ENGINEERING',
        'APPLIED ELECTRONICS AND INSTRUMENTATION ENGINEERING',
        'AUTOMOBILE ENGINEERING',
        'BIOMEDICAL ENGINEERING',
        'BIOTECHNOLOGY',
        'CHEMICAL ENGINEERING',
        'CIVIL ENGINEERING',
        'COMPUTER SCIENCE AND ENGINEERING',
        'ELECTRICAL AND ELECTRONICS ENGINEERING',
        'ELECTRICAL ENGINEERING',
        'ELECTRONICS AND BIOMEDICAL ENGINEERING',
        'ELECTRONICS AND COMMUNICATION ENGINEERING',
        'FOOD TECHNOLOGY',
        'INDUSTRIAL ENGINEERING',
        'INFORMATION TECHNOLOGY',
        'INSTRUMENTATION AND CONTROL ENGINEERING',
        'MECHANICAL ENGINEERING',
        'MECHANICAL ENGINEERING (AUTO)',
        'MECHANICAL ENGINEERING (PRODUCTION)',
        'MECHATRONICS',
        'METALLURGY',
        'NAVAL ARCHITECTURE & SHIP BUILDING ENGINEERING',
        'POLYMER ENGINEERING',
        'PRODUCTION ENGINEERING',
        'ROBOTICS AND AUTOMATION',
        'SAFETY AND FIRE ENGINEERING'];

    useEffect(() => {
        setIsButtonDisabled(phoneNumber === null || phoneNumber === '' || isNaN(parseInt(phoneNumber) || showPhoneNumberError || collegeName === null || collegeName === '' || showCollegeNameError));
    }, [phoneNumber, showPhoneNumberError, collegeName, showCollegeNameError]);

    const formHandler = (e) => {
        if (!((phoneNumber.length !== 10) || (parseInt(phoneNumber).toString().length !== phoneNumber.length) || collegeName === null || collegeName === '')) {
            e.preventDefault();
            const phone = e.target.elements.phone.value;
            const branch = e.target.elements.branch.value;
            const year = e.target.elements.year.value;
            const college = (collegeName.length > 300) ? collegeName.slice(0,300) : collegeName;
            triggerMutation({
                variables : {ID : Cookies.get('user_id'),
                    phone : phone,
                    branch : branch,
                    year : year,
                    college : college}
            });
            props.setFormFilled(true);
        }
        else {
            e.preventDefault();
            if ((phoneNumber.length !== 10) || (parseInt(phoneNumber).toString().length !== phoneNumber.length)) {
                setShowPhoneNumberError(true);
            }
            if (collegeName === null || collegeName === '') {
                setShowCollegeNameError(true);
            }
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

    const handleCollegeChange = (e) => {
      setCollegeName(e.target.value);
      if (showCollegeNameError) {
          if (collegeName !== null || collegeName !== ''){
              setShowCollegeNameError(false);
          }
      }
    };


    return (
        <div className={'formWrapper'}>
            <form className={'studentForm'} onSubmit={(e) => formHandler(e)}>
                {(isButtonDisabled) ? <p className={'studentFormWarn'}>Please fill all fields to continue<span className={'formStar'}>*</span></p>:null}
                <div className={'studentFormPhone'}>
                    <label className={'studentFormLabel'}>Phone<sup className={'formStar'}>*</sup>  </label>
                    <input onChange={handlePhoneNumberChange} maxLength={10} type="number" id="phone" name={crypto.randomBytes(8).toString('hex')} className={'studentFormPhoneInput'} placeholder={'Phone Number without +91'}/>
                    {(showPhoneNumberError) ? <p className={'studentFormWarn'}>This doesn't look like a phone number<span className={'formStar'}>!</span></p>:null}
                </div>
                <div className={'studentFormCollege'}>
                    <label className={'studentFormLabel'}>College<sup className={'formStar'}>*</sup>  </label>
                    <input onChange={handleCollegeChange} maxLength={500} type="text" id="college" name={crypto.randomBytes(8).toString('hex')} className={'studentFormCollegeInput'} placeholder={'College Name'} />
                    {(showCollegeNameError) ? <p className={'studentFormWarn'}>This can't be empty<span className={'formStar'}>!</span></p>:null}
                </div>
                <div className={'studentFormBranch'}>
                    <label className={'studentFormLabel'}>Branch<sup className={'formStar'}>*</sup></label>
                    <select id="branch" name="branch" className={'studentFormBranchInput'} >
                        {branchesArray.map(branch => <option value={branch}>{branch}</option>)}
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
