import {Container,Aside,Main} from "./simple.styles";
import profile_img from "../../assets/1.jpg"

//components
import Skills from "./components/skills/skills.component";

const Simple = () => {
  return (
    <Container>
      <Aside>
          <img src={profile_img} alt="Profile_img" style={{width:"100%",height:"300px",objectFit:"cover"}} />
          <Skills/>
      </Aside>
      <Main></Main>
    </Container>
  )
}

export default Simple