import sourceIcon from "./../assets/images/icon-source.svg";

export default function PlanetSummary({ text, source, children }) {
  return (
    <div className="planet-main_summary" aria-live="polite">
      {children}
      <p>{text}</p>
      <p className="summary_source">
        Source:{" "}
        <a href={source}>
          Wikipedia
          <img src={sourceIcon} alt="" />
        </a>
      </p>
    </div>
  );
}
