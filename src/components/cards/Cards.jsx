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
    <div
      className="childcards"
      className="relative flex flex-col my-6 bg-black shadow-sm rounded-md  w-96"
    >
      <div className="card" className="bg-zinc-900 rounded-md">
        <p
          className=".image"
          className="relative h-52 m-2.5 overflow-hidden text-white rounded-md"
        >
          <img src={imageUrl} alt={imageAlt} />
        </p>

        <div className="relative flex flex-col my-6 bg-zinc-800 shadow-sm rounded-md text-left p-2 m-2.5">
          <p className="mb-2 text-white text-xl font-semibold">
            {projectName}{" "}
          </p>

          <p className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
            {soft}{" "}
          </p>
          <p className="text-white leading-normal font-light text-left text-xs">
            {" "}
            {memberSkills}
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            {" "}
            {members}
          </p>
        </div>
      </div>
    </div>
  );
}
