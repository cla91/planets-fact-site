export default function PlanetImage({
  currentTab,
  currentPlanet,
  imgSrc,
  geologyImageSrc,
}) {
  const isGeologyView = currentTab === "geology";

  return (
    <div className="planet-main_img-container">
      <img
        className={currentPlanet.name.toLowerCase()}
        src={imgSrc}
        alt={`image of ${currentPlanet.name} ${
          isGeologyView ? "planet" : "currentTab"
        }`}
      />
      {isGeologyView && (
        <img
          className={`${currentPlanet.name.toLowerCase()} geology`}
          src={geologyImageSrc}
          alt={`image of ${currentPlanet.name} geology`}
        />
      )}
    </div>
  );
}
