import style from "./sectiontrois.module.css";

export default function Sectiontrois({
  sousTitre,
  span,
  titre,
  description,
  imageUrl,
  imageAlt,
}) {
  return (
    <div className=" inline-flex " id="Competances">
      <div class=" flex">
        <div>
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <div className="skills__container ">
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
    </div>
  );
}
