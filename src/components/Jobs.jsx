import "./Jobs.css";
import Job from "./Job";

function Jobs() {
  return (
    <div className="jobsContainer">
      <Job
        borderСolor="red"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australlie"
        city="Sydney"
      />
      <Job
        borderСolor="blue"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        borderСolor="yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        borderСolor="blue"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        borderСolor="pink"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suede"
        city="Stockholm"
      />
      <Job
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
      <Job
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
}

export default Jobs;
