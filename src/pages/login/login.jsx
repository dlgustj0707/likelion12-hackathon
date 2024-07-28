import React, { useState } from 'react';
import styles from './login.module.css';
import logo from '../../assets/logo.png';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <a className={styles.logo} href=""><img src={logo} alt="" /></a>
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <p className={styles.title}>로그인</p>
                <div className={styles.loginFormContainer}>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email (본인의 학교 이메일을 입력해 주세요.)'/><br />
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
                </div>
                <p className={styles.signupContainer}>계정이 없다면? <a href="" className={styles.signupLink}>회원가입</a></p>
                <button>로그인</button>
            </div>

            <div className={styles.describeContainer}>
                <strong>스쿨 챌린지에 오신 것을 환영합니다.</strong>
                <p>스쿨 챌린지에 오신 것을 환영합니다! 이 챌린지는 여러분에게 다양한 긍정적인 활동을 통해 정신 건강을 챙길 수 있는 기회를 제공합니다. 매일매일 작은 도전을 통해 더욱 건강하고 행복한 자신을 만들어 보세요. 또한, 이달의 대항전 및 학교 대항전을 통해 다른 학교와의 경쟁을 즐기며 더욱 활기찬 학교 생활을 경험해보세요. 친구들과 함께 팀을 이루어 도전을 완료하고, 서로 응원하며 즐거움을 나누세요. 스쿨 챌린지와 함께 건강한 마음과 활기찬 일상을 모두 누리시길 바랍니다! 여러분의 참여와 성취를 기대합니다.</p>
            </div>
        </div>
        </>
    )
}

export default Login;