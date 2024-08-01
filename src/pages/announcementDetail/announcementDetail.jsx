import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './announcementDetail.module.css';
import NavBar from '../../component/navBar/navBar';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function AnnouncementDetail() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(""); 
    const [content, setContent] = useState("");
    const [isRequired, setIsRequired] = useState(false);

    const query = useQuery();
    const noticeId = query.get('noticeId');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const url = `/notices/info?noticeId=${noticeId}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setTitle(data.title);
                    setDate(data.date); 
                    setContent(data.content);
                    setIsRequired(data.important);
                } else {
                    console.error('Error fetching notice:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (noticeId) {
            fetchNotice();
        }
    }, [noticeId]);

    const handleEditClick = () => {
        navigate('/announcementRegister', {
            state: {
                noticeId,
                initialTitle: title,
                initialContent: content,
                initialIsRequired: isRequired,
                initialDate: date
            }
        });
    };

    const handleDeleteClick = async () => {
        try {
            const url = `/notices/delete?noticeId=${noticeId}`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                alert('공지사항이 삭제되었습니다.');
                navigate('/announcement');
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            alert('공지사항 삭제에 실패했습니다.');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <p className={styles.bigTitle}>공지사항</p>
                <hr className={styles.topHr} />
                <div className={styles.titleContainer}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.btnContainer}>
                        <button onClick={handleEditClick}>편집</button>
                        <button onClick={handleDeleteClick}>삭제</button>
                    </div>
                </div>
                <div className={styles.dateContainer}>
                    <p className={styles.date}>{date}</p>
                </div>
                <hr className={styles.bottomHr} />
                
                <p className={styles.content}>{content}</p>
            </div>
        </>
    );
}

export default AnnouncementDetail;
