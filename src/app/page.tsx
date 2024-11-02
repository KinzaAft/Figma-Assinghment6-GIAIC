// pages/index.js
import Link from 'next/link';
import Header from './Components/header';
import Image from 'next/image';
import cateData from './data/data'; 
import productData from './data/product-data';
import popular from './data/popular';
import discount from './data/discountData';
import Footer from './Components/footer';
import { colors } from './data/popular';
import { btn } from './data/popular';
import phone from './Phone/page';

export default function Home(){
    return(
            <div className="hero-section w-full  min-h-screen overflow-hidden   ">
                    <Header/>
        <div className="h-[769px] flex flex-col md:h-[630px] md:flex-row w-full bg-[#211C24] p-0 m-0" >
            <div className="w-full pl-0 text-center md:text-left md:w-[60%] md:pl-40">
                <p className="pt-[88px] text-slate-300 font-bold text-xl md:pt-[200px] ">Pro.Beyond.</p>
                <p className='text-7xl font-thin text-white md:text-8xl font-thin text-white font-[50] pt-1'>IPhone 14 <br /><span className='font-semibold'>Pro</span></p>
                <p className='text-lg pt-[10px] text-slate-300 font-bold md: text-base pt-1'>Create to change everything for the better. For everyone</p>
                {/* <button className=' mt-[25px] text-white border-2 h-[56px] w-[191px] rounded-md'>Shop Now</button> */}
                <Link href="/Phone" passHref>
                    <button className='mt-[25px] text-white border-2 h-[56px] w-[191px] rounded-md'> Shop Now</button>
                </Link>
            </div>
            <div className="right w-[30%]">
                <div className="image "></div>
            </div>
        </div>
    <div className="second-section flex h-[600px]">   
        <div className="left-second">
            <div className="top h-[328px] flex w-[720px]">
                <div className="image-top"></div>
                <div>
                    <p className='text-5xl mt-[100px]'>Playstation 5</p>
                    <p className='text-sm mt-[10px] text-slate-600'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                </div>
            </div>
            <div className="bottom-section flex">
            <div className="bottom1 flex w-[360px] h-[272px]  bg-[#EDEDED]">
                <div className="image-btm1"></div>
                <div>
                <p className='text-3xl ml-[50px] mt-[70px]'>Apple <br />AirPods <br /><span className='font-medium'>Max</span></p>
                <p className='text-sm mt-[10px] text-slate-600 ml-[50px]'>Computational audio.<br/> Listen, it's powerful</p>
                </div>
            </div>
            <div className="bottom2 flex w-[360px] h-[272px]  bg-[#353535]">
                <div className="image-btm2"></div>
                <div>
                <p className='text-3xl ml-[50px] mt-[70px] text-white'>Apple <br />Vision<span className='font-medium'> Pro</span></p>
                <p className='text-sm mt-[10px] text-slate-300 ml-[50px]'>An immersive way to experience entertainment</p>

                </div>
            </div>
            </div>

        </div>
        <div className="right-second flex w-[720px] h-[600px] bg-[#EDEDED]">
            <div className='w-[360px] h-[200px] pt-[150px] pl-[50px]'>
                <p className='text-6xl font-thin'>Macbook<br/> <span className='font-medium'>Air</span></p>
                <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button className=' mt-[25px] border-black text-black border-2 h-10 w-[151px] rounded-md'>Shop Now</button>

            </div>
            <div className="image-right"></div>

        </div>
    </div>
    <div className="third-section h-[325px] bg-[#FAFAFA]">
        <div className="top flex justify-between pl-[60px] pt-[60px] pb-[10px]">
            <p className='text-2xl pl-[110px] font-medium '>Browser By Category</p>
            <div className="icon flex">      
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#000000" fill="none">
    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
            <svg className='mr-[160px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#000000" fill="none">
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>  
</div>

            </div>
        <div className="categeory flex justify-evenly  w-full h-40 pl-[160px] pr-[160px] "> 
           
                {cateData.map((data)=>(
                    <div >
                   
                     <div className="cat1 w-[160px] rounded-md h-[128px] bg-[#EDEDED] " >
                     <div className="cat1-img pl-[52px] pt-[24px] ">
                     <Image src={data.picture} alt={data.tittle} width={48} height={48} />
                     </div>

                     <p className='text-center font-medium text-base'>{data.tittle}</p>
                    </div>
                    </div>  
                )

                )}
               
          
        </div>
    </div>

    <div className="forth-section w-full h-[1106px]">
        <ul className='text-base  flex pl-[160px] pt-[56px]'>
            <li className='font-medium border-b-2 border-black'>New Arrivals</li>
            <li className='ml-[32px] text-[#8B8B8B] font-medium'>Bestsellers</li>
            <li className='ml-[32px] text-[#8B8B8B] font-medium'>Featured Products</li>
        </ul>

        <div className="product-section flex  ml-[120px] mr-[120px] mt-[62px] justify-between flex-wrap">
           

                {productData.map((proData)=>(
                <div className="product w-[268px] h-[432px] bg-[#F6F6F6] rounded mt-[16px]">
                     <svg className=' heart float-right text-[#909090] mr-[10px] mt-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <div className="pro-img h-[160px] w-[160px] mt-[60px] ml-[60px]">
                    <Image src={proData.proImg} alt="image of phone"></Image>
                    </div>
                    <p className='text-base font-medium text-center pt-[10px]'>{proData.tittle}</p>
                    <p className='text-center  font-medium'>{proData.description}</p>
                    <p className="price text-center text-2xl pt-[20px] font-semibold">{proData.price}</p>
                    <button className='buttonPro border border-black bg-[black] text-[#fff] h-[48px] w-[188px] rounded-md ml-[50px] mt-[20px]'>Buy Now</button>
            </div>
                )

                )}
               
        </div>
    </div>

    <div className="fifth-section flex w-full h-[640px]">
                
                {popular.map((popularData,index)=>(
                      <div className='w-[360px] h-[640px] ' key={index} style={{ backgroundColor: colors[index % colors.length] }} >
                      <div className='h-[327px] w-[330px] ' >
                        <Image src={popularData.img} alt='pic' height={327} width={360}></Image>
                      </div>
                      <p className='text-3xl ml-[32px] mt-[10px]'  key={index} style={{color: btn[index % colors.length] }}>{popularData.tittle}</p>
                      <p className='text-sm ml-[32px] text-[#909090]'>{popularData.description}</p>
                      <button className='border-2 border-black w-[191px] h-[56px] rounded-md mt-[16px] ml-[32px]' key={index} style={{color: btn[index % colors.length], borderColor: btn [index % colors.length] }}>Shop Now</button>
                  </div>    

                )

                )}
    </div>
    <div className="sixth-section">
        <p className='text-2xl ml-[145px] font-medium'>Discounts up to -50%</p>
        <div className='flex justify-between ml-[130px] mr-[130px]'>
        {discount.map((discountData)=>(
                <div className="product w-[268px] h-[432px] bg-[#F6F6F6] rounded mt-[16px] ml-[16px]">
                     <svg id='heart' className='float-right text-[#909090] mr-[10px] mt-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <div className="pro-img h-[160px] w-[160px] mt-[60px] ml-[60px]">
                    <Image src={discountData.picture} alt="image of phone"></Image>
                    </div>
                    <p className='text-base font-medium text-center pt-[10px]'>{discountData.tittle}</p>
                    <p className='text-center  font-medium'>{discountData.description}</p>
                    <p className="price text-center text-2xl pt-[20px] font-semibold">{discountData.price}</p>
                    <button className='border border-black bg-[black] text-[#fff] h-[48px] w-[188px] rounded-md ml-[50px] mt-[20px]'>Buy Now</button>
            </div>
                )

                )}
                </div>
    </div>
    <div className="seventh-section">
        <p className='text-7xl font-thin text-slate-50 text-center pt-[150px]'>Big Summer <span className='font-medium'>Sale</span></p>
        <p className='text-center pt-[10px] text-[#787878]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <button className='mt-[25px] text-white border-2 h-10 w-[151px] rounded-md ml-[570px]'>Shop Now</button>
    </div>
    <Footer/>
    </div>
    )
 }
