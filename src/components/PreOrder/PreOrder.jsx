import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import DynamicText from '../DynamicText/DynamicText';
import { Helmet } from 'react-helmet-async';

const PreOrder = () => {
    const [email, setEmail] = useState('');
    const firstNameRef = useRef(null);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Helmet>
                <title>
                    Pre-Order - Gadget Haven
                </title>
            </Helmet>
            <DynamicText
                headingText={'Looking For Something Different ??'}
                paraText={'Put Your Information in The Box...'}
            ></DynamicText>
            {/* <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"> */}
            {/* <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Me</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
                </div> */}
            <div className='md:absolute md:w-[900px]  bg-[rgba(255,255,255,0.34)] right-[30rem] rounded-[2.75rem] md:mx-auto -bottom-[7rem] md:mt-12 mt-4 backdrop-blur-xl'>
                <form
                    onSubmit={handleFormSubmit}
                    className="mx-auto mt-16 max-w-xl sm:mt-20"
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-2">
                        <div className='w-full'>
                            <label
                                htmlFor="first-name"
                                className="block text-sm/6 font-semibold text-gray-900"
                            >
                                Product Information
                            </label>
                            <div className="mt-2.5">
                                <input
                                    ref={firstNameRef}
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                        <br />
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm/6 font-semibold text-gray-900"
                            >
                                Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">

                        </div>
                        <div className='md:grid-cols-2 grid grid-cols-1 gap-3 w-full'>
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="email"
                                    className="block text-sm/6 font-semibold text-gray-900"
                                >
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        onChange={handleEmail}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm/6 font-semibold text-gray-900"
                                >
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300">
                                        <div className="grid shrink-0 grid-cols-1">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country"
                                                aria-label="Country"
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 bg-white"
                                            >
                                                <option>US</option>
                                                <option>CA</option>
                                                <option>BDT</option>
                                                <option>IND</option>
                                                <option>PAK</option>
                                                <option>EU</option>
                                            </select>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </div>
                                        <input
                                            id="phone-number"
                                            name="phone-number"
                                            type="text"
                                            placeholder="123-456-7890"
                                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 bg-white"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block text-sm/6 font-semibold text-gray-900"
                            >
                                Address
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                        <div className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <input type="checkbox" name="" id="" required />
                                <span className="sr-only">Agree to policies</span>
                            </div>
                            <label className="text-sm/6 text-gray-600">
                                By selecting this, you agree to our{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    privacy&nbsp;policy
                                </a>
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Link to='/submit'
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Lets talk
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        // </div>
    );
}

export default PreOrder;