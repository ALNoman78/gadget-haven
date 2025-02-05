import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SingleProduct = ({ item }) => {
    const { product_image, product_id, product_title, price} = item
    return (
        <div className="card card-compact bg-white md:m-5 shadow-md border border-base-200">
            <figure className='rounded-xl'>
                <img
                    src={product_image}
                    alt="Shoes"
                    className='p-4 rounded-xl md:h-[300px] h-auto w-full object-cover border border-base-200' />
            </figure>
            <div className="card-body">
                <h2 className="card-title md:text-xl text-sm">{product_title}</h2>
                <p className='md:text-lg font-medium text-stone-400 '>${price}</p>
                <div className="card-actions">
                    <Link to={`/product/${product_id}`}>
                        <button className="btn bg-white md:text-lg text-sm rounded-full font-bold border border-[#9538E2] text-[#9538E2]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

SingleProduct.propTypes = {
    item: PropTypes.object.isRequired,
}

export default SingleProduct