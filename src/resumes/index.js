import { lazy} from "react";



import cv1 from "../assets/demo-1.png";
import cv2 from "../assets/demo-2.png";
import cv3 from "../assets/demo-3.png";

const Casscade = lazy(()=> import("./casscade/casscade.component"));
const Simple = lazy(()=> import("./simple/simple.component"));

export const resumes = [
  {
    id: 1,
    title:'Casscade',
    template: Casscade,
    image: cv1,
  },
  {
    id: 2,
    title:'Clasic',
    template: Simple,
    image: cv3,
    comingSoon:true
  },
  {
    id: 3,
    title:'Simple',
    template: Simple,
    image: cv2,
    comingSoon:true
  },
];
