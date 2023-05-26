import { Container,Aside,Main} from './Resume.styles'
import proflie_img from "../assets/1.jpg"
import Education from './components/Education/education'

const Resume = () => {
  return (
    <Container>
        <Aside>
          <img src= {proflie_img} alt="asset_react_image"  style= {{width:"100%"}} />
          <Education/>
        </Aside>
      
        <Main>  </Main>
    </Container>
  )
}

export default Resume;