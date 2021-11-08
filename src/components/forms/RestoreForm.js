import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
// import classes from "./RestoreForm.module.css";
import Header from "./header/header";
import InputField from "./input/InputField";
import {StyledButton, StyledInputs, StyledText} from "./RestoreForm.styled";
import {StyledForm, StyledSidebar} from "./LoginPages.styled";
import Button from "./button/Button";

const RestoreForm = () => {
    const validate = Yup.object({
        email: Yup.string().email("Email is invalid").required('Email is required'),
    })

    return (
        <Formik initialValues={{
            email: '',
        }}
                validationSchema={validate}
                onSubmit={values => (
                    console.log(values)
                )}
        >
            {formik => (
                <StyledSidebar>
                    <Header text='Restore Password'/>
                    <StyledText>Please use your email address, and we’ll send you
                        the link to reset your password</StyledText>
                    {/*<p>An email has been sent to <StyledEmail>example@exam.com</StyledEmail>.*/}
                    {/*     Check your inbox, and click the reset link provided.</p>*/}
                    <StyledForm>
                        <StyledInputs>
                            <InputField type='email' placeholder='Email' name="email"/>
                        </StyledInputs>
                        <Button text='Send Reset Link'  width='213px' mediaWidth='198px'/>
                    </StyledForm>
                </StyledSidebar>
            )}
        </Formik>
    );
};

export default RestoreForm;