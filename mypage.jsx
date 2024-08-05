import React, { useState, useEffect } from 'react';
import axios from '../../axios'; // axios 인스턴스 가져오기
import styles from './mypage.module.css';
import defaultImg from '../../assets/Group.png';
import ChallengeViewComponent2 from '../../component/challengeViewComponent/challengeViewComponent2';

function Mypage() {
    const [isSchoolChal, setIsSchoolChal] = useState(true); 
    const [imageSrc, setImageSrc] = useState(defaultImg);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        // 유저 정보를 가져오는 함수
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://beancp.com:8082/user/userInfo');
                const data = response.data;
                if (data.info) {
                    setName(data.info.name);
                    setEmail(data.info.email);
                    setSchool(data.info.school);
                    if (data.info.image_url) {
                        setImageSrc(data.info.image_url);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch user info:', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleBtnClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('imageFile', file);

            // 이미지 미리보기
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);

            // 백엔드로 파일 업로드
            try {
                const response = await axios.post('http://beancp.com:8082/upload', formData);
                if (response.data.message === 'image upload success') {
                    console.log('Image uploaded successfully');
                } else {
                    console.error('Image upload failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const handleSchoolChallenge = async () => {
        try {
            setIsSchoolChal(true);
            const response = await axios.get('http://beancp.com:8082/user/inSchoolChal');
            const data = response.data;
            if (data.challenge) {
                setChallenges(data.challenge);
            }
        } catch (error) {
            console.error('Failed to fetch school challenges:', error);
        }
    };

    const handleAllChallenge = async () => {
        try {
            setIsSchoolChal(false);
            const response = await axios.get('http://beancp.com:8082/user/inAllChal');
            const data = response.data;
            if (data.challenge) {
                setChallenges(data.challenge);
            }
        } catch (error) {
            console.error('Failed to fetch all challenges:', error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <img src={imageSrc} alt="Profile" className={styles.profileImage} />
                <button className={styles.edit} onClick={handleBtnClick}>
                    <svg
                        width="41"
                        height="42"
                        viewBox="0 0 41 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="20.75" cy="21.125" r="20.25" fill="#D9D9D9" />
                        <g clipPath="url(#clip0_0_1)">
                            <path
                                d="M10.625 31.2501H14.8438L27.2862 18.8076L23.0675 14.5889L10.625 27.0314V31.2501ZM12.875 27.9651L23.0675 17.7726L24.1025 18.8076L13.91 29.0001H12.875V27.9651Z"
                                fill="#666666"
                            />
                            <path
                                d="M27.9162 11.3261C27.4775 10.8874 26.7687 10.8874 26.33 11.3261L24.2712 13.3849L28.49 17.6036L30.5487 15.5449C30.9875 15.1061 30.9875 14.3974 30.5487 13.9586L27.9162 11.3261Z"
                                fill="#666666"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_1">
                                <rect width="27" height="27" fill="white" transform="translate(7.25 7.625)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <input
                    type="file"
                    id="fileInput"
                    className={styles.hiddenFileInput}
                    onChange={handleFileChange}
                />
                <div className={styles.infoContainer}>
                    <p className={styles.info}>{school} 재학, {name} 님</p>
                    <p className={styles.email}>E-mail : {email}</p>
                </div>
                
            </div>

            <div className={styles.chalBtnContainer}>
                <p>참여 중인 챌린지</p>
                <button
                    onClick={handleSchoolChallenge}
                    style={{ borderBottom: isSchoolChal ? '2px solid black' : '2px solid #BDBDBD' }}
                >
                    교내 챌린지
                </button>
                <button
                    onClick={handleAllChallenge}
                    style={{ borderBottom: !isSchoolChal ? '2px solid black' : '2px solid #BDBDBD' }}
                >
                    전체 챌린지
                </button>
                <hr/>
            </div>

            <div className={styles.challengesContainer}>
                {challenges.map((challenge) => (
                    <ChallengeViewComponent2
                        key={challenge.id}
                        title={challenge.title}
                        count={challenge.inCount}
                        content={challenge.discription}
                    />
                ))}
                
            </div>
        </div>
    );
}

export default Mypage;
