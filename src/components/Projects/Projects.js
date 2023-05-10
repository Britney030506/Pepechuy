import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { LeftSection } from "../Hero/HeroStyles";

const Projects = () => (
  <section nopadding id="proyects">
    <Section>
      <LeftSection>
        <SectionTitle main center>
          moments
        </SectionTitle>
        <GridContainer>
          {projects.map(
            ({ id, image, title, description, tags, source, visit }) => (
              <BlogCard key={id}>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo> {description} </CardInfo>
              </BlogCard>
            )
          )}
        </GridContainer>
      </LeftSection>
    </Section>
  </section>
);

export default Projects;
