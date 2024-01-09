
import ArrowCollapse from './ArrowCollapse'
import styles from './Collapse.module.scss'
import { useState } from 'react'

function Collapse(props) {
    
    const [isContentVisible, setIsContentVisible] = useState(false);
    const handleToggleCollapse = () => {
        setIsContentVisible((prevState) => !prevState)
    }

    return (
        <div className={styles.collapseParent}>
            <div className={styles.collapse} onClick={handleToggleCollapse}>
                <span className={styles.spanCollapse}>{props.title}</span>
                <div className={styles.arrowCollapse}><ArrowCollapse rotate={isContentVisible ? 180 : 0} /></div>
            </div>
            <div className={`${styles.content} ${isContentVisible ? styles.contentVisible : ''}`}><div className={styles.contentPadding}>{props.content}</div></div>
        </div>
    )
}

export default Collapse