import React from 'react';
import styles from './signup.module.css';
import logo from '../../assets/logo.png';

function Signup() {
    return (
        <>
            <a className={styles.logo} href=""><img src={logo} alt="" /></a>
            <div className={styles.container}>
                <div>
                    <p>회원가입</p>
                    <div className={styles.signupFormContainer}>
                        <div>
                            <input type="email" placeholder='Email (본인의 학교 이메일을 입력해 주세요.)' />
                            <button>인증하기</button>
                        </div>
                        <div>
                            <input type="password" placeholder='Password를 입력해 주세요.' />
                        </div>
                        <div>
                            <input type="password" placeholder='Password를 다시 한 번 입력해 주세요.' />
                        </div>
                        <button>회원가입 완료하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
