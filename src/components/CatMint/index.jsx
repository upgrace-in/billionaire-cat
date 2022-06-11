import catImg from "../../assets/pic-nft.png";
import Footer from "../Footer/Footer";
import {
    Link,
  } from "react-router-dom";
import {Helmet} from 'react-helmet';
import ProgressBar from "@ramonak/react-progress-bar";


export const CatMint = () => {
    return (
        <>
        <Helmet>
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="crossorigin="anonymous"></script>
        <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
        <script type="text/javascript" src="https://unpkg.com/web3modal"></script>
        <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider"></script>

        <script src="/js/mint.js" type="text/javascript" />
        </Helmet>
            <div className='container mx-auto text-white mt-[159px]'>
                <div className='xl:grid grid-cols-2 gap-x-12 mb-[100px]'>
                    <div className='content xl:max-w-[636px]'>
                        <h3 className='font-garmani md:text-[63px] text-[34px] font-normal leading-[42px] sm:leading-[74px]'>
                            MINT A BILLIONAIRE CAT'S MYSTERY BOX
                        </h3>
                        <p className='font-inter mt-4 text-[20px] mb-[37px]'>TO WIN A TESLA MODEL S AND ALOT MORE UPTO 250K IN PRIZES</p>
                        <div className='mint-nft border-2 border-[#E4A841] rounded-2xl py-[57px] px-[40px]'>
                            <h4 className='text-center font-garmani md:text-[61px] text-[34px] font-normal leading-[50px]'>Mint NFT</h4>
                            <h5 className='text-center mt-[5px] font-inter md:text-[26px] text-[20px] font-normal leading-[42px]'>10,000 NFTs</h5>

                            <form className='mt-[38px]'>
                                <div className='form-control'>
                                    <input className='border-b-4 border-[#373737] w-full bg-transparent placeholder:text-white leading-[42px] sm:text-[26px] text-base focus:outline-none sm:pb-8 pb-4' type='text' placeholder='Balance' />
                                </div>
                                <div className='main-quantity-box mt-12 flex border-b-4 border-[#373737] sm:pb-8 pb-4 items-center justify-between	'>
                                    <div className='form-control '>
                                        <input className='sm:w-32 w-[4rem] bg-transparent placeholder:text-white leading-[42px] sm:text-[26px] text-base focus:outline-none ' type='text' placeholder='Amount' />
                                    </div>
                                    <div className='quantity flex items-center'>
                                        <span style={{cursor: "pointer"}} id="decrease_btn" className='text-base sm:text-[65px] sm:leading-[97px] sm:mr-12 mr-4'>-</span>
                                        <span id="mint_count" className='text-base sm:text-[65px] sm:leading-[97px] sm:mr-12 mr-4'>1</span>
                                        <span style={{cursor: "pointer"}} id="increase_btn" className='text-base sm:text-[65px] sm:leading-[97px] '>+</span>
                                    </div>
                                    <button type="button" id="max_btn" className='max-button font-semibold	sm:text-[33px] text-base rounded-[10px] bg-white text-black py-2 sm:py-[9px] sm:px-[31px] px-2 sm:leading-[49px] leading-[20px]'>Max</button>

                                </div>
                                <div className=''>
                                    {/* <Link to='/'className='md:text-[30px] text-[20px] mt-[50px] mb-[15px] font-bold bg-[#E4A841] w-full py-[19px] leading-[54px] rounded-xl block text-center'>Available</Link> */}
                                    <button id="mint_btn" type="button" className='md:text-[30px] text-[20px] mt-[50px] mb-[15px] font-bold bg-[#E4A841] w-full py-[19px] leading-[54px] rounded-xl block text-center'>Connect Wallet</button>
                                </div>
                                <a className="text-center text-[#A8A8A8] underline block" href='{#}'>Make sure your MetaMask wallet is connected</a>
                            </form>
                        </div>

                    </div>
                    <figure className='img-section xl:my-auto mt-28'>
                        <img className='ml-auto' src={catImg} />
                    </figure>
                </div>
            </div>
            <Footer />
        </>
    )
}