import styles from './title.module.css';

export default function Title({name}) {
    return (
      <div className={styles["title"]}>
        <h1>{name}</h1>
        <h2>Graphiste, développeur web et bien plus </h2>
      </div>
    );
  }