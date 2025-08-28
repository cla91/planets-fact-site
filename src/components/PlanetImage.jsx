import formatImgUrl from "../utils/formtImgUrl";

export default function PlanetImage({ currentTab, currentPlanet }) {
  const currentImg =
    currentTab === "overview"
      ? "planet"
      : currentTab === "structure"
      ? "internal"
      : "geology";

  return (
    <div className="planet-main_img-container">
      <img
        className={currentPlanet.name.toLowerCase()}
        src={
          currentImg === "geology"
            ? formatImgUrl(currentPlanet.images.planet)
            : formatImgUrl(currentPlanet.images[currentImg])
        }
        alt={`image of ${currentPlanet.name} ${currentImg}`}
      />
      {currentImg === "geology" && (
        <img
          className={`${currentPlanet.name.toLowerCase()} geology`}
          src={formatImgUrl(currentPlanet.images.geology)}
          alt={`image of ${currentPlanet.name} geology`}
        />
      )}
    </div>
  );
}
