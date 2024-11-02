import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


type dataFooterService={
    info:string;
}
const serviceData:dataFooterService[]=[
    {info:"Bounus Program"},
    {info:"Gift Cards"},
    {info:"Credit and payments"},
    {info:"Service contracts"},
    {info:"Non-Cash account"},
    {info:"Payment"},
]

type dataFooterBuyer={
    info:String;
}
const buyerData:dataFooterBuyer[]=[
    {info:"Find an order"},
    {info:"Terms of delivery"},
    {info:"Exchange and return of goods"},
    {info:"Guarantee"},
    {info:"Frequently asked questions"},
    {info:"Terms of use of the site"},

]
export default function Footer (){
    return (
        <div className="footer-container h-[504px] w-full bg-[#000] text-[#fff]">        
            <div className=" flex  pl-[160px] pt-[104px] pr-[160px] ">
            <div className="first-part w-[383px] p-auto">
                <p className="nav-logo text-2xl font-bold">Cyber</p>
                <p className="mt-[24px] text-sm font-medium text-[#CFCFCF]">We are a residential interior design firm located <br /> in Portland. Our boutique-studio offers more than</p>
            </div>
            <div className="second-part w-[295px] h-[256px] ml-[110px]">
            <p className="text-base font-semibold">Services</p>
            {serviceData.map((dataFooterService)=>(
                 <p className="mt-[8px] text-sm h-[32px] text-[#CFCFCF]">{dataFooterService.info}</p>
            ))}
              
            </div>
            <div className="third-part w-[295px]">
            <p className=" text-base font-semibold">Assistance to the buyer</p>
            {buyerData.map((dataFooterBuyer)=>(
                 <p className="mt-[8px] text-sm h-[32px]  text-[#CFCFCF]">{dataFooterBuyer.info}</p>
            ))}
            </div>
            </div>
            <div className="ml-[160px] flex  justify-evenly w-[173px]">

            <FaTwitter />
            <FaFacebookF />
            <FaTiktok />
            <AiFillInstagram />
            </div>
        </div>

    )
}