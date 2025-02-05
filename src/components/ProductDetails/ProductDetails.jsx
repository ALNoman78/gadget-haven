import { useLoaderData, useParams } from 'react-router-dom'
import DynamicText from '../DynamicText/DynamicText'
import { IoMdCart } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { addToCartList, setDataWishlist } from '../Utility/addToDB';

const ProductDetails = () => {
    const { product_id } = useParams()
    const allData = useLoaderData()
    const id = parseInt(product_id)

    const items = allData.find((product_data) => product_data.product_id === id)

    const handleAddToCart = (id) => {
        addToCartList(id)
    }
    // stored data wishlist
    const handleWishlist = (id) => {
        setDataWishlist(id)
    }

    const { product_image, product_title, price, description, specification } = items
    console.log(product_id, id);
    return (
        <div className='font-sora'>
            <DynamicText
                headingText={'Product Details'}
                paraText={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                btn={null}
            ></DynamicText>
            <div className='md:absolute md:w-[1154px] md:right-[23rem] md:rounded-[2.75rem] mx-auto md:-bottom-[5rem] md:mt-12'>
                <div className='md:flex bg-white p-8 rounded-xl gap-7'>
                    <div>
                        <img
                            className='md:h-[500px] object-cover rounded-xl border border-base-200'
                            src={product_image} alt="" />
                    </div>
                    <div>
                        <h3 className='md:text-3xl text-[#09080F] font-medium pb-2'>{product_title}</h3>
                        <p className='text-[rgba(9,8,15,0.8)] font-bold text-xl pb-2'>Price : ${price}</p>
                        <button className='px-8 my-2 font-bold btn py-4 rounded-full text-[#309C08] border-emerald-600 bg-[rgba(47,156,8,0.1)] border border-s-teal-800'>In Stock</button>
                        <p className='text-[rgba(9,8,15,0.6)] pb-2'>{description}</p>
                        <p className='text-[#09080F] text-xl font-bold'>Specification:</p>
                        {
                            specification.map((list, idx) => <li className='' key={idx}>{list}</li>)
                        }
                        <div className='flex items-center gap-2'>
                            <p className='text-[#09080F] font-bold text-lg my-4'>Ratings : </p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-5'>
                            <div
                                className='flex items-center gap-3 btn w-40 text-white bg-[#9538E2] font-bold'
                                onClick={() => handleAddToCart(product_id)}
                            >
                                <button >Add To Cart</button>
                                <IoMdCart></IoMdCart>
                            </div>
                            <button 
                            className='btn'
                            onClick={() => handleWishlist(product_id)}
                            > <GrFavorite /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductDetails.propTypes = {}

export default ProductDetails