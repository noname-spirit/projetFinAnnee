/* ajouer une image*/

export default function Cards({
  projectName,
  imageUrl,
  imageAlt,
  soft,
  memberSkills,
  members,
}) {
  return (
    <div className="cards">
      <div className="card">
        <p className=".image">
          {imageUrl}
          {imageAlt}
        </p>
        <p className="projectName">{projectName} </p>

        <p className="logiciels">{soft} </p>
        <p className="participent"> {memberSkills}</p>
        <p className="menbers"> {members}</p>
      </div>
    </div>
  );
}
