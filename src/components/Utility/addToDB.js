import { Bounce, toast } from "react-toastify";

const getStoredData = () => {
    const storedData = localStorage.getItem('set-items')
    if(storedData){
        const storedDataStr = JSON.parse(storedData)
        return storedDataStr;
    }
    else{
        return []
    }
}

const addToCartList = (id) => {
    const storedData = getStoredData();
    if(storedData.includes(id)){
        console.log('already exist' , id)
        toast.error('Already Exist', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }else{
        storedData.push(id);
        const storedListStr = JSON.stringify(storedData)
        localStorage.setItem('set-items' , storedListStr)
        toast.success('Added To cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
}

const getStoredWishlist = () => {
    const storedList = localStorage.getItem('set-data')
    if(storedList){
        const storedListStr = JSON.parse(storedList)
        return storedListStr;
    }
    else{
        return []
    }
}

const setDataWishlist = id => {
    const storedData = getStoredWishlist()
    if(storedData.includes(id)){
        console.log('already exist', id)
        toast.error('Already Exist', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    else{
        storedData.push(id)
        const storedListStr = JSON.stringify(storedData)
        localStorage.setItem('set-data' , storedListStr)
        toast.success('Added To Wishlist', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
}

export {getStoredData , addToCartList , setDataWishlist ,getStoredWishlist }