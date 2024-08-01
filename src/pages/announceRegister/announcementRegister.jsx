import React, { useState } from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './announcementRegister.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

function AnnouncementRegister() {
    const location = useLocation();
    const { noticeId, initialTitle, initialContent, initialIsRequired } = location.state || {};
    
    const [title, setTitle] = useState(initialTitle || "");
    const [content, setContent] = useState(initialContent || "");
    const [isRequired, setIsRequired] = useState(initialIsRequired || false);
    const navigate = useNavigate();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };
    const handleChangeIsRequired = (e) => {
        setIsRequired(e.target.value === "필독");
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    const handleClickBtn = async (e) => {
        e.preventDefault();

        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);

        const requestBody = {
            notices: [
                {
                    title: title,
                    date: formattedDate,
                    content: content,
                    important: isRequired
                }
            ]
        };

        try {
            const response = await fetch(noticeId ? '/notices/update' : '/notices/create', {
                method: noticeId ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });
            const data = await response.json();
            if (response.ok) {
                alert(noticeId ? '공지사항이 수정되었습니다.' : '공지사항이 등록되었습니다.');
                navigate('/announcement');
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('공지사항 업로드에 실패했습니다.');
            console.error(error);
        }
    };

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <p className={styles.subtitle}>{noticeId ? '공지사항 수정하기' : '공지사항 등록하기'}</p>
                <div className={styles.contentContainer}>
                    <div className={styles.title}>
                        <label htmlFor="title">제목</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="제목을 작성해 주세요."
                            value={title}
                            onChange={handleChangeTitle}
                        />
                    </div>
                    <div className={styles.content}>
                        <label htmlFor="content">내용</label>
                        <textarea
                            id="content"
                            placeholder="공지사항을 작성해 주세요."
                            value={content}
                            onChange={handleChangeContent}
                        >
                        </textarea>
                    </div>
                    <div className={styles.read}>
                        <label htmlFor="isRequired">필독 유무</label>
                        <select
                            name="필독 유무"
                            id="isRequired"
                            value={isRequired ? "필독" : "일반"}
                            onChange={handleChangeIsRequired}
                        >
                            <option value="">선택</option>
                            <option value="필독">필독</option>
                            <option value="일반">일반</option>
                        </select>
                    </div>
                    <button onClick={handleClickBtn}>
                        <span>{noticeId ? '수정하기' : '등록하기'}</span>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnnouncementRegister;
