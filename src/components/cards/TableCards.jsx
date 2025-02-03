import React, { useState } from "react";
import CardsData from "./CardsData"; // 🔥 Import des données
import Cards from "./Cards"; // 🔥 Import du composant pour une carte

const TableCard = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // 🔥 Récupérer tous les skills uniques
  const allSkills = Array.from(
    new Set(CardsData.flatMap((card) => card.memberSkills))
  );
  // flatmap : pour transformer le tableau de cartes en un tableau plat de toutes les compétences

  return (
    <div>
      {/* 🔥 Boutons de filtrage */}
      <div className="filters">
        <button onClick={() => setSelectedSkill(null)}>Tous:&nbsp;</button>
        {allSkills.map((skill, index) => (
          <span
            key={index}
            className=" py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 md:p-0 md:dark:hover:text-red-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <button onClick={() => setSelectedSkill(skill)}>{skill}</button>
            {index < allSkills.length - 1 && <span> </span>}
          </span>
        ))}
      </div>

      {/* 🔥 Affichage des cartes filtrées */}
      <div className="cards">
        {CardsData.filter((card) =>
          selectedSkill ? card.memberSkills.includes(selectedSkill) : true
        ).map((e, i) => (
          <Cards
            key={i}
            imageUrl={e.imageUrl}
            imageAlt={e.imageAlt}
            projectName={e.projectName}
            soft={e.soft}
            memberSkills={e.memberSkills}
            members={e.members}
          />
        ))}
      </div>
    </div>
  );
};

export default TableCard;
