import { StaticImageData } from "next/image";
import group1 from "../public/group1.png"
import group2 from "../public/group2.png"
import group3 from "../public/group3.png"
import group4 from "../public/group4.png"


type popularData={
    img: StaticImageData,
    tittle: string,
    description: string,
}
const colors = ["#FFFFFF", "#F9F9F9", "#EAEAEA", "#2C2C2C"];
const btn = ["#000","#000","#000","#fff"]
const popular:popularData[]=[
    {
        img: group1,
        tittle:"Popular Products",
        description:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
    },
    {
        img: group2,
        tittle:"Ipad Pro",
        description:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
    },
    {
        img: group3,
        tittle:"Samsung Galaxy",
        description:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
    },
    {
        img: group4,
        tittle:"Macbook Pro",
        description:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
    }

]

export default popular;
export {colors};
export {btn};