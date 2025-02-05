// import PropTypes from 'prop-types'
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DynamicText = ({ headingText, paraText, btn }) => {
    // const location = useLocation()
    // console.log(location);
    // const isHomePage = location.pathname === "/dashboard";
    return (
        <div className="font-sora hero bg-[#9538E2] rounded-b-xl md:px-56 md:pb-64 md:w-[96%] mx-auto text-white">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="md:text-7xl text-2xl my-3 font-bold">{headingText}</h1>
                    <p className="py-3 md:w-2/3 mx-auto text-center">
                        {paraText}
                    </p>
                    {
                        btn && (<button className="btn bg-white text-purple-600 font-bold px-12 rounded-full">{btn}</button>)
                    }
                    {/* <div className='absolute w-[1154px]  bg-[rgba(255,255,255,0.34)] right-[23rem] rounded-[2.75rem] mx-auto -bottom-[7rem] mt-12'>
                        <img className='w-full md:h-[600px] object-cover p-6 border-2 border-white rounded-[2.75rem]' src={items} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

DynamicText.propTypes = {
    headingText: PropTypes.string,
    paraText : PropTypes.string,
    btn : PropTypes.string,
}

export default DynamicText