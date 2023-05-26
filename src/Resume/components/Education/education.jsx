import { Body1, Heading, Heading2, SlugLine } from "../../Resume.styles";
import { Container, Degree } from "./education.styles";

const Education = () => {
  return (
    <Container>
      <Heading>
        Education
        <span></span>
      </Heading>

      <Degree>
        <SlugLine>2016</SlugLine>
        <Heading2>degree name text here</Heading2>
        <Body1>name of university / college</Body1>
      </Degree>
      <Degree>
        <SlugLine>2013</SlugLine>
        <Heading2>degree name text here</Heading2>
        <Body1>name of university / college</Body1>
      </Degree>
    </Container>
  );
};

export default Education;
