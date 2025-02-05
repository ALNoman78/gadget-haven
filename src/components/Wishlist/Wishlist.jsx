import PropTypes from 'prop-types'
import { addToCartList } from '../Utility/addToDB';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";

const Wishlist = ({ wishlistData }) => {
    const { product_id } = useParams()
    const allData = useLoaderData()
    const id = parseInt(product_id)

    const items = allData.find((product_data) => product_data.product_id === id)
    // console.log(wishlistData)
    const { product_image, product_title, price, description } = wishlistData;
    const handleAddToCart = (id) => {
        addToCartList(id)
    }
    return (
        <div>
            <div className='md:flex items-center justify-around bg-white border border-base-300 rounded-xl shadow-lg md:max-w-6xl md:mx-auto my-2 md:m-4'>
                <div>
                    <img
                        className='md:h-[220px] h-1/2 object-cover md:m-4 bg-base-200 rounded-lg border border-base-200'
                        src={product_image} alt="" />
                </div>
                <div className='md:m-4 p-2'>
                    <h3 className='md:text-2xl text-[#09080F] font-medium pb-2'>{product_title}</h3>
                    <p className='text-[rgba(9,8,15,0.6)] md:text-lg text-xs pb-2'>{description}</p>
                    <p className='text-[rgba(9,8,15,0.8)] font-bold md:text-xl pb-2'>Price : ${price}</p>
                    <div
                        className='flex items-center gap-3 btn w-40 text-white bg-[#9538E2] font-bold'
                        onClick={() => handleAddToCart(product_id)}
                    >
                        <button >Add To Cart</button>
                        <IoMdCart></IoMdCart>
                    </div>
                </div>
                <div className="text-xs text-center p-2">
                    <button className="btn btn-circle btn-outline md:text-lg text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

Wishlist.propTypes = {
    wishlistData: PropTypes.object.isRequired,
}

export default Wishlist