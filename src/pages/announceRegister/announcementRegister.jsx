import React, { useState } from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './announcementRegister.module.css';

function AnnouncementRegister() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isRequired, setIsRequired] = useState(false); 

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }
    const handleChangeIsRequired = (e) => {
        setIsRequired(e.target.value === "필독");
    }

    const handleClickBtn = async(e) => {
        e.prevantDefault();
        try{
            const response = await fetch('/notices/create', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    important: isRequired
                })
            })
            const data = await response.json();
            if (response.status === 200){
                alert('공지사항이 등록되었습니다.');
                window.location.href = '/announcement';
            } else {
                alert(data.message);
            }
        }catch(error){
            console.error(error);
        }
    }
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <p className={styles.subtitle}>공지사항 등록하기</p>

                <div className={styles.contentContainer}>
                    <div className={styles.title}>
                        <label htmlFor="">제목</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="제목을 작성해 주세요."
                            value={title}
                            onChange={handleChangeTitle}
                        />
                    </div>
                    <div className={styles.content}>
                        <label htmlFor="">내용</label>
                        <textarea
                            id="content"
                            placeholder="공지사항을 작성해 주세요."
                            value={content}
                            onChange={handleChangeContent}>
                        </textarea>
                    </div>
                    <div className={styles.read}>
                        <label htmlFor="">필독 유무</label>
                        <select
                            name="필독 유무"
                            id="isRequired"
                            value={isRequired}
                            onChange={handleChangeIsRequired}
                        >
                            <option value="">선택</option>
                            <option value="필독">필독</option>
                            <option value="일반">일반</option>
                        </select>
                    </div>
                    <button onClick={handleClickBtn}>
                        <span>등록하기</span>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z" fill="white" />
                        </svg>
                    </button>
                </div>

            </div>
        </>
    )
}

export default AnnouncementRegister;
