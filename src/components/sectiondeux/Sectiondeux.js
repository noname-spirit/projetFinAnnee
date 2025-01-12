import styles from "./sectiondeux.module.css";

export default function Sectiondeux({ title, contenu, span }) {
  return (
    <div className="item">
      <div className="item_container">
        {" "}
        <h1 className="titre">{title}</h1>
        <div className="contenu_container">
          <p className="contenu">
            {contenu}
            <span style={{ color: "red" }}>{span}</span>
            {/*  condition pour affichage ... uniquement si span*/}
          </p>
        </div>
      </div>
    </div>
  );
}
