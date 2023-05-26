import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  margin: 20px 230px;
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

export const Heading2 = styled.h3`
text-transform:"capitalize";
font-weight:bold;
padding-bottom:14px;
margin-bottom:16px;

::before{
    content:'';
    display:block;
    max-width:30%;
    height:5px;
    background-color:#111;
}`;

export const Section = styled.section`
padding:18px;

`
