import Header from "../Components/header"
import Footer from "../Components/footer"
import productData from "../data/product-data"
import Image from "next/image"
export default function phone(){
    return(
        <div>
            <Header/>

            <div className="product-section h-[1000px]  flex  ml-[120px] mr-[120px] mt-[62px] justify-between flex-wrap">
           

                {productData.map((proData)=>(
                <div className="product w-[268px] h-[432px] bg-[#F6F6F6] rounded mt-[16px]">
                     <svg className='heart float-right text-[#909090] mr-[10px] mt-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <div className="pro-img h-[160px] w-[160px] mt-[60px] ml-[60px]">
                    <Image src={proData.proImg} alt="image of phone"></Image>
                    </div>
                    <p className='text-base font-medium text-center pt-[10px]'>{proData.tittle}</p>
                    <p className='text-center  font-medium'>{proData.description}</p>
                    <p className="price text-center text-2xl pt-[20px] font-semibold">{proData.price}</p>
                    <button className='buttonPro border border-black bg-[black] text-[#fff] h-[48px] w-[188px] rounded-md ml-[50px] mt-[20px] '>Buy Now</button> 

            </div>
                )

                )}
               
        </div>
            <Footer/>
        </div>
    )
}