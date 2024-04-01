const formatPopulation = (value) => {

    if (value >= 1000000) { return ((value / 1000000).toFixed(2) + " " + "M").replace(".", ",") };
    if (value >= 1000) { return ((value / 1000).toFixed(2) + " " + "K").replace(".", ",") };
    return value;
}
// console.log(formatPopulation(1345).replace(".", ","));

export default formatPopulation;