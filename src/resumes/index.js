import { lazy} from "react";



import cv1 from "../assets/demo-1.png";
import cv2 from "../assets/demo-2.png";
import cv3 from "../assets/demo-3.png";

const casscade = lazy(()=> import("./casscade/casscade.component"));
const simple = lazy(()=> import("./simple/simple.component"));

// const component = ({template:Template}) => <Suspense fallback="Loading..."><Template/></Suspense>


export const resumes = [
  {
    id: 1,
    title:'casscade',
    template: casscade,
    image: cv1,
  },
  {
    id: 2,
    title:'clasic',
    template: simple,
    image: cv3,
    comingSoon:true
  },
  {
    id: 3,
    title:'simple',
    image: cv2,
    comingSoon:true
  },
];
