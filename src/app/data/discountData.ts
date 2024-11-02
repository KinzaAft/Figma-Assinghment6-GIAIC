import { StaticImageData } from "next/image"
import goldenPhone from "../public/Iphone 14 pro 1.png"
import headphone from "../public/head-pro.png"
import watch from "../public/watch-pro.png"
import silverPhone from "../public/Iphone 14 pro 1 (1).png"



type disData={
    picture:StaticImageData;
    tittle: String;
    description: string;
    price: string;
}

const discount: disData[]=[
    {
        picture:goldenPhone,
        tittle: "Apple iPhone 14 Pro 512GB",
        description:"Gold (MQ233)",
        price:"$1437"
    },
    {
        picture:headphone,
        tittle:"AirPods Max Silver",
        description:"Starlight Aluminium ",
        price:"$549"
    },
    {
        picture:watch,
        tittle:"Apple Watch Series 9 GPS ",
        description:"41mm Starlight Aluminium ",
        price:"$399"
    },
    {
        picture: silverPhone,
        tittle:"Apple iPhone 14 Pro 1TB Gold",
        description:"(MQ2V3)",
        price:"$1499"
    }

]


export default discount