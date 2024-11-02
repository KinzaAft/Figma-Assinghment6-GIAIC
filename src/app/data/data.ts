import Image from "next/image";
import { StaticImageData } from "next/image";
import phone from "../public/Phones.png"
import watch from "../public/Smart Watches.png"
import camera from "../public/Cameras.png"
import headphone from "../public/Headphones.png"
import computer from "../public/Computers.png"
import gaming from "../public/Gaming.png"

type data={
    picture:StaticImageData
    tittle:string;
}
 
 const cateData: data[] = [
    {tittle:"Phone",picture:phone},
    {tittle:"Smart Watches",picture:watch},
    {tittle:"Cameras",picture:camera},
    {tittle:"HeadPhones",picture:headphone},
    {tittle:"Computers",picture:computer},
    {tittle:"Gaming",picture:gaming},

]

export default cateData;

