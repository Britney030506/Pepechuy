import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello my darling <br />
        this is for you..
      </SectionTitle>
      <SectionText>
        It's the first time I do something like that, the first time I try to do
        a detail on a web page I did not go away, but I really tried to give you
        a nice detail as you have given me
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.youtube.com/watch?v=lXAaplQHDNA&ab_channel=hyunjinmusic")
        }
      >
        {" "}
        when I think you
      </Button>{" "}
    </LeftSection>
  </Section>
);

export default Hero;
