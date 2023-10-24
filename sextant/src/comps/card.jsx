import styles from './comps.module.css';

function Card({title, desc}){

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h4><b>{title}</b></h4>
                <p>{desc}</p>
            </div>
        </div>
    )

}

export default Card;