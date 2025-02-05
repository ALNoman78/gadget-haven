import { Helmet } from 'react-helmet-async'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Gadget Haven</title>
            </Helmet>
            <Banner></Banner>
            <Product></Product>
        </div>
    )
}

Home.propTypes = {}

export default Home