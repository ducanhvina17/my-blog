import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Translate from "@docusaurus/Translate";
const experience = [
  {
    company: "University of Information Technology",
    position: "Bachelor of Science",
    date: "September 2015 - October 2019",
    desc: {
      1: "Gained knowledge about fundamentals of the fields of Information Technology and Computer Science.",
      2: "Formed a deep understanding of modern cloud-driven network architecture with hands-on experience.",
      3: "Acquired a comprehensive understanding of the integration of Machine Learning models and modern Web Development by finishing the graduation project.",
    },
  },
  {
    company: "Zalo",
    position: "Software Developer",
    date: "September 2019 - July 2020 ",
    desc: {
      1: "Developed and optimized RESTful APIs using Java and Spring Boot, resulting in a 30% improvement in request handling efficiency.",
      2: "Collaborated with database administrators to design and implement database schema and SQL queries, improving data retrieval times by 25%." ,
      3: "Worked closely within an Agile/Scrum framework, adapting to rapidly changing requirements while contributing to sprint planning and retrospective meetings.",
    },
  },
  {
    company: "Fiza",
    position: "Senior Software Engineer",
    date: "July 2020 - Now ",
    desc: {
      1: "Developed robust and scalable microservices using Java and Scala with Spring Boot, enhancing system performance and reliability.",
      2: "Spearheaded the use of Kubernetes for orchestration and containerization, automating deployment, scaling, and management processes to improve system uptime and resilience." ,
      3: "Collaborated closely with cross-functional teams within an Agile/Scrum framework, adapting to evolving requirements to consistently deliver high-quality software.",
      4: "Utilized leadership skills to mentor junior developers in Java and Scala best practices, contributing to an overall improvement in team productivity." ,
    },
  },
];
function Experience() {
  const [value, setValue] = useState(0);
  const { company, position, date, desc } = experience[value];

  return (
    <section className="experience">
      <h2 className="experience-title">
        <Translate>Experience</Translate>
      </h2>
      <div className="underline"></div>
      <div className="experiences-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`experience-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="experience-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="experience-date">{date}</p>
          {Object.keys(desc).map((key, index) => {
            return (
              <div key={index} className="experience-desc">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="experience-icon"
                ></FontAwesomeIcon>
                <p>{desc[key]}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experience;
