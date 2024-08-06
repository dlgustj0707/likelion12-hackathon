import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './announcementDetail.module.css';
import axios from 'axios';
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
                const url = `http://beancp.com:8082/notices/info?noticeId=${noticeId}`;
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status === 200) {
                    const data = response.data;
                    console.log(data);
                    setTitle(data.notices[0].title);
                    setDate(data.notices[0].modifiedAt); 
                    setContent(data.notices[0].content);
                    setIsRequired(data.notices[0].important);
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
            const url = `http://beancp.com:8082/notices/delete?noticeId=${noticeId}`;
            const response = await axios.delete(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                alert('공지사항이 삭제되었습니다.');
                navigate('/announcement');
            } else {
                const data = response.data;
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
