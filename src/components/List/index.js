import { useState } from "react";
import Item from "../Item";


const List = ({ cities }) => {

    const [format, setFormat] = useState(false);
    const handleFormat = () => {
        setFormat(prevState => !prevState);
    }

    return (
        <>
            <div>
                <h3>Resultats</h3>
                <button onClick={handleFormat}>Changer le format</button>
            </div>
            <ul>
                {cities?.map(async (city) => {
                    return (
                        <li>
                            <Item
                                key={city.code}
                                nom={city?.nom}
                                codeDepartement={city?.codeDepartement}
                                codeRegion={city?.codeRegions}
                                codePostal={city?.codesPostaux[0]}
                                population={city?.population}
                                format={format}
                            />
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}
export default List;