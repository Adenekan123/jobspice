import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
export const Aside = styled.aside`
  flex: 0 0 25%;
  min-height: 100vh;
  background-color: yellow;
`;
export const Main = styled.section`
  flex: 1;
  min-height: 100vh;
  background-color: grey;
`;
export const Heading = styled.h2`
  text-transform: uppercase;
  margin-bottom:14px;

  span {
    display: block;
    width: 10%;
    margin-top: 5px;
    height: 4px;
    background-color: black;
  }
`;


export const Heading2 = styled.h4`
  text-transform:uppercase;
`;

export const SlugLine = styled.small`
  font-size:12px;
  text-transform:capitalize;
`
export const Body1 = styled.p`
  font-size:14px;
  text-transform:capitalize;
`
export const Body2 = styled.p`
  font-size:13px;
  text-transform:capitalize;
`