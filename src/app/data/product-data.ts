import { StaticImageData } from "next/image"
import phon from "../public/phone-pro.png"
import cam from "../public/cam-pro.png"
import wat from "../public/watch-pro.png"
import head from "../public/head-pro.png"
import wactch from "../public/wat-pro.png"
import galaxy from "../public/galaxy.png"
import buds from "../public/air-pro.png"
import Ipad from "../public/tab-pro.png"

type proData={
    proImg:StaticImageData;
    tittle: String;
    description: string;
    price: string;
}

const productData:proData[] =[
    {
        proImg:phon,
        tittle:"Apple iPhone 14 Pro Max",
        description:"128GB Deep Purple ",
        price: "$900"

    },
    {
        proImg: cam,
        tittle:"Blackmagic Pocket Cinema",
        description:"Camera 6k",
        price:"$2535"
    },
    {
        proImg:wat,
        tittle:"Apple Watch Series 9 GPS",
        description:"41mm Starlight Aluminium ",
        price:"$399"
    },
    {
        proImg:head,
        tittle:"AirPods Max Silver",
        description:"Starlight Aluminium",
        price:"$549"
    },
    {
        proImg:wactch,
        tittle:"Samsung Galaxy Watch6",
        description:"Classic 47mm Black",
        price:"$369"
    },
    {
        proImg:galaxy,
        tittle:"Galaxy Z Fold5 Unlocked | ",
        description:"256GB | Phantom Black",
        price:"$1799"
    },
    {
        proImg:buds,
        tittle:"Galaxy Buds FE",
        description:"Graphite",
        price:" $99.99"
    },
    {
        proImg:Ipad,
        tittle:"Apple iPad 9 10.2 64GB Wi-Fi ",
        description:"Silver (MK2L3) 2021",
        price:"$398"
    }

] 

export default productData;