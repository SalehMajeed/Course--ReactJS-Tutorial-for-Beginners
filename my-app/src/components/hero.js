import React from 'react'

function Hero({ hero_name }) {
    if (hero_name == 'joker') {
        throw new Error('Not a hero');
    }
    return (
        <div>
            {hero_name}
        </div>
    )
}

export default Hero
