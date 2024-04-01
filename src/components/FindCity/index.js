import { useEffect, useState } from "react"
import List from "../List"
import Search from "../Search"

const FindCity = () => {

    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState('');
    const [searchZip, setSearchZip] = useState('');
    const [searchRegion, setSearchRegion] = useState = ('');
    const [loading, setLoading] = useState(false);


    const getCities = async (askInput, search) => {
        try {
            setLoading(true);
            const response = await fetch(`https://geo.api.gouv.fr/communes?${askInput}=${search}`);
            const cityFound = await response.json();
            setCities(cityFound);
            console.log(cityFound);
            setLoading(false);

        }
        catch (error) {
            console.error(error.message);
        };

    }
    useEffect(() => { getCities("nom", search) }, [search]);
    useEffect(() => { getCities("codePostal", searchZip) }, [searchZip]);
    useEffect(() => { getCities("codeRegion", searchRegion) }, [searchRegion]);

    return (
        <>

            <h1>Rechercher votre ville ou commune</h1>
            {loading === true && <p>Chargement en cours.. merci de bien vouloir patienter</p>}
            < Search setSearch={setSearch} setSearchZip={setSearchZip} setSearchRegion={setSearchRegion} />
            <List cities={cities} />

        </>
    )
}
export default FindCity;