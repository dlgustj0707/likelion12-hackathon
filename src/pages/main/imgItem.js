import React from 'react';
import styles from './imgItem.module.css';

function ImgItem(props) {
    const title = props.title;
    const src = props.src;
    const bgImg = {
        backgroundImage: `url(${src})`,
      };
    return (
        <>
        <div className={styles.inSchoolChallengeFlex}>
            <div className={styles.innerFlex}>
                <div className={styles.imgItem} style={bgImg}>
                    <h3 className={styles.imgTitle}>{title}</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default ImgItem;