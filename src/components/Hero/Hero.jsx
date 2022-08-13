import React from "react";

const Hero = ({ hero }) =>{

    return(
        <div className="Hero-block">
            <h2>{hero.name}</h2>
            <p>{hero.adress}</p>
            <p>{hero.city}</p>
            <p>{hero.email}</p>
            <p>{hero.birthDate}</p>

        </div>
    );
}

export default Hero;