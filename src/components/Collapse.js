
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
                <span>{props.title}</span>
                <ArrowCollapse rotate={isContentVisible ? 180 : 0} />
            </div>
            <div className={`${styles.content} ${isContentVisible ? styles.contentVisible : ''}`}>{props.content}</div>
        </div>
    )
}

export default Collapse