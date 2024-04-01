import { useState } from "react";


const Search = ({ setSearch, setSearchRegion, setSearchZip }) => {

    const [input, setInput] = useState('');


    const handleChange = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {

        event.preventDefault();


        const codePostalRegex = /^(?:[0-8]\d|9[0-8])\d{3}$/;
        const codeRegionRegex = /^[0-9]{2}$/;

        if (codeRegionRegex.test(input)) { setSearchRegion(input); }
        else if (!codePostalRegex.test(input)) { setSearch(input); }
        else { setSearch(input); }
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="search">NOM DE LA COMMUNE</label>
                <input onChange={handleChange} value={input} id="search" type="search" placeholder=" Troyes, 31000, 45..." />
            </div>
            <button type="submit">Lancer la recherche</button>
        </form>

    )
}
export default Search;