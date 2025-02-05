import bannerImage from '../../assets/banner.jpg'
import DynamicText from '../DynamicText/DynamicText'

const Banner = () => {
    return (
        // <div className="hero">
        //     <div className="hero-content text-center">
        //         <div className="">
        //             <h1 className="text-7xl my-3 font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        //             <p className="py-6 md:w-2/4 mx-auto text-center">
        //                 Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        //             </p>
        //             <button className="btn bg-white text-purple-600 font-bold px-12 rounded-full">Shop Now</button>
        //             <div className='absolute w-[1154px]  bg-[rgba(255,255,255,0.34)] right-[23rem] rounded-[2.75rem] mx-auto -bottom-[7rem] mt-12'>
        //                 <img className='w-full md:h-[600px] object-cover p-6 border-2 border-white rounded-[2.75rem]' src={bannerImage} alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <DynamicText
                headingText={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
                paraText={' Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                imageCard={bannerImage}
                btn={'Shop Now'}
            >
            </DynamicText>
            <div className='md:absolute md:w-[1154px]  bg-[rgba(255,255,255,0.34)] right-[23rem] rounded-[2.75rem] md:mx-auto -bottom-[6rem] md:mt-12 mt-4'>
                <img className='w-full md:h-[600px] object-cover p-6 border-2 border-white rounded-[2.75rem]' src={bannerImage} alt="" />
            </div>
        </div>
    )
}

Banner.propTypes = {}

export default Banner