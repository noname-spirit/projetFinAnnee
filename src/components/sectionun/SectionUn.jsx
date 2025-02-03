import { TypeAnimation } from "react-type-animation";

export default function SectionUn() {
  return (
    <>
      <div className=" absolute text-white imgposition ">
        <TypeAnimation
          sequence={[
            // animation texte accueil
            "Il est temps de créer",
            1000,
            "It's time to create",
            1000,
            "Create something big",
            1000,
            "Contact us to make it happen",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
      <div className=" ">
        <p className="">
          <img src="asset/img/nns_ac_bg.jpg" alt="test" />
        </p>
      </div>
    </>
  );
}
