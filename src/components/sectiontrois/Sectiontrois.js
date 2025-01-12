import style from "./sectiontrois.module.css";

export default function Sectiontrois({ sousTitre, span, titre, description }) {
  return (
    <div className="skills">
      <div className="skills__container">
        {" "}
        <h2 className="soustitre">
          {sousTitre}
          <span className="span_skills" style={{ color: "red" }}>
            {" "}
            {span}
          </span>
        </h2>
        <p className="titre">{titre}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
