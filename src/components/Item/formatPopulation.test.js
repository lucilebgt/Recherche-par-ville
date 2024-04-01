import formatPopulation from "./formatPopulation";



describe('formatPopulation', () => {
    test('doit afficher un million facon 1M', () => {
        const result = formatPopulation(1234000);
        expect(result).toBe("1,23 M");
    })
    test('doit afficher un mille facon 1K', () => {
        const result = formatPopulation(1234);
        expect(result).toBe("1,23 K");
    })
    test('doit afficher un nombre normal', () => {
        const result = formatPopulation(123);
        expect(result).toBe(123);
    })
})