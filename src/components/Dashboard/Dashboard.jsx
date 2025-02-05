import { useEffect, useState } from 'react'
import DynamicText from '../DynamicText/DynamicText'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { getStoredData, getStoredWishlist } from '../Utility/addToDB';
import Cart from '../Cart/Cart';
import { FaSort } from "react-icons/fa";
import groupImage from '../../assets/Group.png'
import Wishlist from '../Wishlist/Wishlist';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const cartData = useLoaderData();
    const [cart, setCart] = useState([])
    const allWishlist = useLoaderData()
    const [wishlist, setWishlist] = useState([])
    // sort by ascending order to descending order
    const [sort, setSort] = useState('')
    // for cart list data
    useEffect(() => {
        const storedCartList = getStoredData()
        const storedListInt = storedCartList.map((id) => parseInt(id))

        const allCartList = cartData.filter((items) => storedListInt.includes(items.product_id))
        setCart(allCartList)
    }, [])
    // for wishlist data
    useEffect(() => {
        const storedWishlist = getStoredWishlist()
        const storedListInt = storedWishlist.map((id) => parseInt(id))

        const allWishlistData = allWishlist.filter((item) => storedListInt.includes(item.product_id))
        setWishlist(allWishlistData)
    }, [])
    // handle sort data
    const handleSort = (sortType) => {
        setSort(sortType)
        if (sortType === 'Sort by Price') {
            const sortPrice = [...cart].sort((a, b) => b.price - a.price)
            setCart(sortPrice)
        }
    }
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className='font-sora relative'>
            <Helmet>
                <title>
                    Dashboard - Gadget Haven
                </title>
            </Helmet>
            <DynamicText
                headingText={'Dashboard'}
                paraText={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></DynamicText>
            <div>
                <Tabs className='relative'>
                    <div className='font-sora mt-4  gap-6 font-bold flex items-center justify-center relative'>
                        <TabList className='flex items-center'>
                            <Tab className='px-8 py-3 rounded-full border border-white cursor-pointer'>Cart</Tab>
                            <Tab className='px-8 py-3 rounded-full border border-white cursor-pointer'>Wishlist</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className='md:flex justify-between md:max-w-7xl mx-auto md:my-8 my-4'>
                            <h2 className='md:text-xl text-sm font-bold'>Cart</h2>
                            {/* total amount , short ,  */}
                            <div className='md:flex items-center justify-between md:gap-5'>
                                <p className='md:text-xl text-sm font-bold'>Total Amount : $
                                    {
                                        Math.round(totalPrice)
                                    }
                                </p>
                                <div className="dropdown">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        onClick={() => handleSort('Sort by Price')}
                                        className="btn m-1 md:text-xl text-xs rounded-full border border-[#8332C5] font-medium bg-white">
                                        Sort by Price
                                        <FaSort></FaSort>
                                    </div>
                                </div>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button
                                    className='btn bg-[#8332C5] text-white rounded-full md:text-xl text-sm'
                                    onClick={() => document.getElementById('my_modal_5').showModal()}>Purchase</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle flex-col items-center justify-center text-center">
                                    <div className="modal-box text-center">
                                        <div className='flex justify-center'>
                                            <img src={groupImage} alt="" />
                                        </div>
                                        <p className="py-4 font-bold md:text-lg">Payment Successfully</p>
                                        <p>Thanks for purchasing.</p>
                                        <br />
                                        <span>
                                            Total Price : $
                                            {
                                                Math.round(totalPrice)
                                            }
                                        </span>
                                        <div className="modal-action">
                                            <form method="dialog" className='w-[20rem]'>

                                                <button className="btn mt-4">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                        {/* added to cart items */}
                        <div>
                            {
                                cart.map((item, idx) => <Cart key={idx} cartItems={item}></Cart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='md:max-w-7xl mx-auto md:my-8 my-4'>
                            <h2 className='text-xl font-bold'>Wishlist : {wishlist.length}</h2>
                            <div>
                                {
                                    wishlist.map((item, idx) => <Wishlist key={idx} wishlistData={item}></Wishlist>)
                                }
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div >
    )
}

Dashboard.propTypes = {}

export default Dashboard