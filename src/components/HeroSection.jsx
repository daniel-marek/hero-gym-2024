import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 space-y-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Vítá vás 
        <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
          {" "}
          Hero Gym
        </span>
      </h1>
      <p className="text-center text-lg text-neutral-500 max-w-4xl">
        Posilovna, která splní i ty nejnáročnější požadavky. Ať už jste rekreační sportovec nebo fitness profesionál, u nás najdete vše, co potřebujete. Nové moderní stroje k procvičení celého těla a samostatná kardio zóna - veškeré služby na jednom místě.
      </p>
    </div>
  );
}

export default HeroSection