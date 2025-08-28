import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlanetContext from "./../context/planetContext";
import PlanetImage from "../components/PlanetImage";
import PlanetDetails from "./../components/PlanetDetails";
import PlanetTitle from "./../components/PlanetTitle";
import PlanetSummary from "./../components/PlanetSummary";
import ContentTabs from "./../components/ContentTabs";
import { planetImageMap } from "../assets/images/image-map";

export default function Planet() {
  const { planetName } = useParams();
  const [currentTab, setCurrentTab] = useState("overview");
  const planets = useContext(PlanetContext);
  const planetNameToFind = planetName ? planetName.toLowerCase() : "mercury";
  const currentPlanet = planets.find(
    (p) => p.name.toLowerCase() === planetNameToFind
  );
  useEffect(() => {
    document.body.classList.add(planetNameToFind);
    setCurrentTab("overview");
    return () => document.body.classList.remove(planetNameToFind);
  }, [planetNameToFind, currentPlanet]);

  if (!currentPlanet) {
    return <h1 className="error-message">Planet not found</h1>;
  }

  const imageKey = currentTab === "structure" ? "internal" : "planet";
  const geologyImageSrc = planetImageMap[planetNameToFind]["geology"];
  const planetImageSrc = planetImageMap[planetNameToFind][imageKey];
  return (
    <main className="planet-main">
      <PlanetImage
        currentTab={currentTab}
        currentPlanet={currentPlanet}
        imgSrc={planetImageSrc}
        geologyImageSrc={geologyImageSrc}
      />
      <ContentTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <PlanetSummary
        text={currentPlanet[currentTab].content}
        source={currentPlanet[currentTab].source}
      >
        <PlanetTitle planetName={currentPlanet.name} />
      </PlanetSummary>
      <PlanetDetails
        rotation={currentPlanet.rotation}
        revolution={currentPlanet.revolution}
        radius={currentPlanet.radius}
        temperature={currentPlanet.temperature}
      />
    </main>
  );
}
