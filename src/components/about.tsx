import React, { FC } from "react";
import { ComponentWrapper, SummarySection } from "./styles/shared";
import { AboutPageWrapper, AboutMe } from "./styles/about";
import { SectionTitle, SummaryCard } from "./shared";
import { CarousalSlider } from "./carousal"

const aboutMe = `A highly motivated and results-oriented senior professional with 7+ years of experience across finTech and startup environments. My expertise lies in JavaScript (ES6+), TypeScript, D3.js, GraphQL, Groovy on Grails, CSS3/HTML5, Webpack, A/B testing, and MySQL. I am well-versed in popular frameworks and tools including React, Next.js, Gatsby, Node.js, Bootstrap, Vue.js, git, and agile methodologies.
Seeking a challenging role within a team of skilled and passion-driven engineers to inspire continuous growth and contribute to meaningful projects, advancing career to the next level.
`;

const summary = [
  {
    desc: "",
    heading: "7+",
    subHeading: "years of experience",
  },
  {
    desc: "",
    heading: "11+",
    subHeading: "Projects Done",
  },
  {
    desc: "",
    heading: "22+",
    subHeading: "Countries visited",
  },
  {
    desc: "",
    heading: "24/7",
    subHeading: "Available to talk",
  },
];
export const About: FC = () => {
  return (
    <ComponentWrapper>
      <AboutPageWrapper>
        <SectionTitle baseText="About Me" title="who am i?" />
        <AboutMe>{aboutMe}</AboutMe>
        <SummarySection>
          {summary.map((sum, idx) => (
            <SummaryCard
              desc={sum.desc}
              heading={sum.heading}
              subHeading={sum.subHeading}
            />
          ))}
        </SummarySection>
      </AboutPageWrapper>
      <CarousalSlider/>
    </ComponentWrapper>
  );
};
