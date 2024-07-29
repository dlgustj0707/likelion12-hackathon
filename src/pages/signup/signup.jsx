import React, { useState } from 'react';
import styles from './signup.module.css';
import logo from '../../assets/logo.png';

function Signup() {
    const [email, setEmail] = useState("");
    const [certificationNum, setCertificationNum] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false); // 이메일 인증 실패 메시지를 위한 상태 추가
    const [certificationSuccess, setCertificationSuccess] = useState(false);
    const [certificationError, setCertificationError] = useState(false); // 인증번호 확인 실패 메시지를 위한 상태 추가

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleClickEmailBtn = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/user/emailAuthReq?email=${email}`, {
                method: 'GET'
            });
            const data = await response.json();
            if (data.success) {
                setEmailSent(true);
                setEmailError(false); 
            } else {
                setEmailSent(false);
                setEmailError(true); 
            }
        } catch (error) {
            setEmailSent(false);
            setEmailError(true); 
            console.error(error);
        }
    }

    const handleChangeNum = (e) => {
        setCertificationNum(e.target.value);
    }

    const handleClickCertiBtn = async (e) => {
        e.preventDefault();
        try {
            // 이게 맞는지 모르겠음
            const response = await fetch(`/user/emailAuthRes?certificationNum=${certificationNum}`, {
                method: 'GET'
            });
            const data = await response.json();
            if (data.success) {
                setCertificationSuccess(true);
                setCertificationError(false); 
            } else {
                setCertificationSuccess(false);
                setCertificationError(true); 
            }
        } catch (error) {
            setCertificationSuccess(false);
            setCertificationError(true); 
            console.error('Error:', error);
        }
    }

    const handleChangePwd = (e)  => {
        setPwd(e.target.value);
    }

    const handleChangePwd2 = (e) => {
        setPwd2(e.target.value);
    }

    const handleClickBtn = async(e) => {
        e.preventDefault();
        if (!certificationSuccess) {
            alert("이메일 인증을 완료해 주세요.");
        }
        if (pwd !== pwd2){
            alert("Passwords do not match");
        }
        try {
            const response = await fetch('/user/signUp', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: pwd,
                    // name: name,
                    // school: school
                })
            })
            const data = await response.json();
            if (response.status === 201){
                alert(data.message);
                    window.location.href = '/main';
            } else {
                alert(data.message);
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <a className={styles.logo} href="/main"><img src={logo} alt="Logo" /></a>
            <div className={styles.container}>
                <div>
                    <p>회원가입</p>
                    <div className={styles.signupFormContainer}>
                        <div>
                            <input 
                                type="email" 
                                value={email}
                                onChange={handleChangeEmail}
                                placeholder='Email (본인의 학교 이메일을 입력해 주세요.)' />
                            <button className={styles.certiBtn} onClick={handleClickEmailBtn}>인증하기</button>
                        </div>
                        {emailSent && <p className={styles.successMsg}>인증번호가 이메일로 발송되었습니다.</p>}
                        {emailError && <p className={styles.errorMsg}>이메일 인증에 실패했습니다. 다시 시도해주세요.</p>}
                        <div className={styles.certiContainer}>
                            <input 
                                type="text" 
                                value={certificationNum}
                                onChange={handleChangeNum}
                                placeholder='인증 번호를 입력해 주세요.' />
                            <button onClick={handleClickCertiBtn}>
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.00002 11.2001L1.80002 7.0001L0.400024 8.4001L6.00002 14.0001L18 2.0001L16.6 0.600098L11.3 5.9001L6.00002 11.2001Z" fill="#666666"/>
                                </svg>
                            </button>
                        </div>
                        {certificationSuccess && <p className={styles.successMsg}>인증번호가 확인되었습니다.</p>}
                        {certificationError && <p className={styles.errorMsg}>인증번호가 올바르지 않습니다. 다시 시도해주세요.</p>}
                        <div>
                            <input 
                                type="password"
                                value={pwd}
                                onChange={handleChangePwd}
                                placeholder='Password를 입력해 주세요.' />
                        </div>
                        <div>
                            <input 
                                type="password"
                                value={pwd2}
                                onChange={handleChangePwd2}
                                placeholder='Password를 다시 한 번 입력해 주세요.' />
                        </div>
                        <button onClick={handleClickBtn}>회원가입 완료하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
