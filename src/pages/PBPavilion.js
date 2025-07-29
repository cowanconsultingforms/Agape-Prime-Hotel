import React from 'react';
import PavillionCard from '../components/PavillionCard';

import bougie from '../assets/images/PBPavillion-Images/bougie.png';
import uniliveonce from '../assets/images/PBPavillion-Images/uniliveonce.png';
import sushihouse from '../assets/images/PBPavillion-Images/sushihouse.png';
import inhomesushi from '../assets/images/PBPavillion-Images/inhomesushi.png';
import tunaspectacle from '../assets/images/PBPavillion-Images/tunaspectacle.png';
import sushiclass from '../assets/images/PBPavillion-Images/sushiclass.png';

const priceColors = ['#FFC300', '#FF5733', '#28B463', '#5DADE2', '#AF7AC5', '#F39C12'];

const events = [
    {
        title: 'The American Dream: Tubman',
        price: '$150+ PER PERSON',
        image: bougie,
        details: [
            'PASSED COMMUNITY BITES FOR YOU AND YOUR GUESTS',
            '2-hour seated event',
            '12-course private provisions',
            '2-hour signature libations of your choice',
            'Minimum of 8 guests'
        ]
    },
    {
        title: 'Uni Live Once',
        price: '$300 PER PERSON',
        image: uniliveonce,
        details: [
            '2-hour cocktail experience',
            '12 curated plates',
            '2 rolls per guest',
            'Full open bar',
            'Minimum of 15 guests'
        ]
    },
    {
        title: 'Sushi House Party',
        price: '$175 PER PERSON',
        image: sushihouse,
        details: [
            '2-hour event',
            'Passed bites & stations',
            'Private host & chefs',
            'Minimum of 15 guests'
        ]
    },
    {
        title: 'In-Home Sushi Dinner',
        price: '$230 PER PERSON',
        image: inhomesushi,
        details: [
            '2-hour seated dinner',
            '17 curated courses',
            'Private chef & server',
            'Minimum of 6 guests'
        ]
    },
    {
        title: 'Tuna Spectacle',
        price: '$10K MINIMUM',
        image: tunaspectacle,
        details: [
            '3-hour dinner & show',
            'Whole roast or showcase plate',
            'Feeds up to 50 guests'
        ]
    },
    {
        title: 'Sushi Making Classes',
        price: '$75++ PER PERSON',
        image: sushiclass,
        details: [
            'Hands-on class',
            'Make 3 signature items',
            'Ends with tasting',
            'Optional take-home kit'
        ]
    }
];

const PBPavilion = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            >
                <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div
                style={{
                    padding: '4rem 2rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                    justifyItems: 'center',
                    alignItems: 'stretch',
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {events.map((event, index) => (
                    <PavillionCard
                        key={index}
                        event={event}
                        priceColor={priceColors[index % priceColors.length]}
                    />
                ))}
            </div>
        </div>
    );
};

export default PBPavilion;
