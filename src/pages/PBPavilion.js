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
        title: 'Legacy Lounge: Baldwin & Bubbles',
        price: '$100+ PER PERSON',
        image: inhomesushi,
        details: [
            'A LITERARY TOAST TO CULTURE AND TASTE',
            '2-hour sunset lounge experience',
            'Charcuterie and signature Afro-Latin tapas',
            'Champagne, Prosecco, & artisanal mocktails',
            'Minimum of 6 guests'
        ]
    },
    {
        title: 'Civic Spirit: Hamilton Pour',
        price: '$110+ PER PERSON',
        image: sushihouse,
        details: [
            'REVOLUTIONARY FLAVORS, SERVED IN STYLE',
            '2-hour cocktail-forward lounge tasting',
            'Elevated hors d’oeuvres with bold global notes',
            'Curated wine + cocktail flight (3 rounds)',
            'Minimum of 6 guests'
        ]
    },
    {
        title: 'Island Revival: Garífuna Gold',
        price: '$125+ PER PERSON',
        image: uniliveonce,
        details: [
            'ROOTED IN HERITAGE, INFUSED WITH SPICE',
            '90-minute communal table experience',
            '10-course Afro-Caribbean tasting menu',
            '90-minute rum and fresh-juice cocktail bar',
            'Minimum of 6 guests'
        ]
    },
    {
        title: 'Prime Roots: Agape Garden Table',
        price: '$135+ PER PERSON',
        image: tunaspectacle,
        details: [
            'FRESH, BOTANICAL, AND FARM-TO-GLASS',
            '90-minute guided food & drink pairing session',
            'Garden-sourced tasting menu (vegetarian optional)',
            'Floral & fruit-forward cocktail and wine pairings',
            'Minimum of 4 guests'
        ]
    },
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
        title: 'Liberation Fire: Maroon Feast',
        price: '$160+ PER PERSON',
        image: sushiclass,
        details: [
            'CELEBRATING RESILIENCE THROUGH FLAVOR',
            '2-hour long-table feast',
            '5 fire-grilled, chef-prepared courses',
            'Bold aged spirits, mezcal, and smoked cocktails',
            'Live music or spoken word (optional add-on)',
            'Minimum of 10 guests'
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
                    maxWidth: '1350px',
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
