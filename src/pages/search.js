import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react';
import { format, isValid } from "date-fns";
import InfoCard from '@/components/InfoCard';

const Search = ({ searchResults }) => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    let range = "";

    if (isValid(new Date(startDate))) {
        const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
        const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
        range = `${formattedStartDate} - ${formattedEndDate}`;
        // Use the formattedStartDate as needed
        console.log("true");
    } else {
        // Handle the case where startDate is not a valid date
        console.log("false");
    }

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResults.map(({ img, location, title, description, star, price, total }, i) => (
                            <InfoCard key={i} img={img} location={location} description={description} title={title} star={star} price={price} total={total} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then((res) => res.json());

    return {
        props: {
            searchResults,
        }
    }
}