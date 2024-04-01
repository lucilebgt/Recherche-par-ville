import formatPopulation from './formatPopulation';

const Item = ({ nom, codeDepartement, codePostal, population, codeRegion, format }) => {



    return (
        <>
            <span> {nom} - {codeDepartement} </span>
            <span> Code Postal :{codePostal} - {codeRegion}</span>
            {<span>Population: {format === true ? <span>{formatPopulation(population)}</span> : <span>{population}</span>}</span>}
            <span>icone meteo : description meteo</span>
        </>
    )
}
export default Item;