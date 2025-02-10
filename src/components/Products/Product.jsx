import { useEffect, useState } from 'react'
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    //find by category
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [items, setItems] = useState([])
    const categories = ['Mobile', 'Laptop', 'Accessories', 'Smart Watch']

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const fetchedData = (category) => {
        setSelectedCategory(category)
        fetch('/Data.json')
            .then(res => res.json())
            // .then(data => setItems(data))
            .then((data) => {
                if (category === 'All') {
                    setItems(data); // Show all items
                } else {
                    const filteredItems = data.filter((item) => item.category === category);
                    setItems(filteredItems); // Filter by selected category
                }
            });
    }
    return (
        <div className='font-sora'>
            <h3 className='md:text-4xl text-2xl text-center font-bold md:pt-[26rem]'>Explore Cutting-Edge Gadgets</h3>
            <div className="flex w-full flex-col lg:flex-row md:gap-6">
                <div className="card rounded-box grid md:w-[14%] md:h-[600px] flex-grow">
                    <div className="p-4">
                        {/* Categories List */}
                        <ul className="w-full font-medium bg-white shadow-md md:p-5 rounded-xl border">
                            <li
                                className="p-3 bg-[#9538E2] rounded-xl text-white m-2 cursor-pointer"
                                onClick={() => fetchedData('All')}
                            >
                                All Products
                            </li>
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    onClick={() => fetchedData(category)}
                                    className={`p-3 bg-base-200 text-[rgba(9,8,15,0.6)] rounded-xl  m-2 cursor-pointer 
                                        ${selectedCategory === category ? 
                                            'p-3 rounded-xl text-white m-2 cursor-pointer bg-violet-600 ' 
                                            : 'bg-gray-200 text-black'
                                        }`}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>

                        {/* Items Display */}
                        {/* <div className="mt-4"> */}
                        {/* <h2 className="text-xl font-semibold">
                                {selectedCategory || 'All'} Items
                            </h2> */}
                        {/* <ul className="mt-4">
                                {items.length > 0 ? (
                                    items.map((item) => (
                                        <li
                                            key={item.id}
                                            className="p-4 border rounded-lg shadow-md bg-white"
                                        >
                                        </li>
                                    ))
                                ) : (
                                    <p>No items found for this category.</p>
                                )}
                            </ul> */}
                        {/* </div> */}
                    </div>
                </div>
                <div className="card rounded-box grid md:m-0 m-3 md:w-[70%] flex-grow">
                    {/* <h3>content : {items.length}</h3> */}
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-2'>
                        {
                            items.map((category, idx) => <SingleProduct key={idx} item={category}></SingleProduct>)
                        }
                    </div>
                    <ul>
                        {items.length > 0 ? ''
                            : <p className='text-center font-bold md:text-2xl'>No items found for this category.</p>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

Product.propTypes = {}

export default Product