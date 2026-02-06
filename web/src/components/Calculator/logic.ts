import {
    BASE_RATES_SQFT,
    MULTIPLIERS,
    ANCILLARY_SERVICES,
    Region,
    Unit,
    Frequency,
    GrassHeight,
    Terrain,
} from './constants';

interface CalculationInput {
    region: Region;
    area: number;
    unit: Unit;
    frequency: Frequency;
    height: GrassHeight;
    terrain: Terrain;
    services: string[]; // ['edging', 'fertilization', etc.]
}

interface QuoteResult {
    min: number;
    max: number;
    breakdown: {
        baseMowing: { min: number; max: number };
        multipliers: number; // Combined multiplier factor
        surcharges: number; // Any flat fees if added later
        extras: { name: string; min: number; max: number }[];
    };
}

export const convertToSqFt = (area: number, unit: Unit): number => {
    if (unit === 'sqft') return area;
    if (unit === 'sqm') return area * 10.7639;
    if (unit === 'acre') return area * 43560;
    return area;
};

export const calculateQuote = (input: CalculationInput): QuoteResult => {
    const areaSqFt = convertToSqFt(input.area, input.unit);
    const rate = BASE_RATES_SQFT[input.region];

    // 1. Base Mowing Calculation
    // Formula: (Rate * Area)
    let baseMin = rate.min * areaSqFt;
    let baseMax = rate.max * areaSqFt;

    // Apply Minimum Fee if calculated base is too low
    baseMin = Math.max(baseMin, rate.minFee);
    baseMax = Math.max(baseMax, rate.minFee);

    // 2. Multipliers
    const freqMult = MULTIPLIERS.frequency[input.frequency];
    const heightMult = MULTIPLIERS.height[input.height];
    const terrainMult = MULTIPLIERS.terrain[input.terrain];

    const totalMultiplier = freqMult * heightMult * terrainMult;

    let totalMin = baseMin * totalMultiplier;
    let totalMax = baseMax * totalMultiplier;

    // 3. Ancillary Services
    const extras: { name: string; min: number; max: number }[] = [];
    const regionalExtras = ANCILLARY_SERVICES[input.region];

    input.services.forEach((serviceKey) => {
        if (regionalExtras && regionalExtras[serviceKey]) {
            const extra = regionalExtras[serviceKey];
            extras.push({ name: serviceKey, min: extra.min, max: extra.max });
            totalMin += extra.min;
            totalMax += extra.max;
        }
    });

    // 4. Profit Margin (Optional - already baked into market rates, but we can add buffer)
    // Let's assume market rates include profit.

    return {
        min: Math.round(totalMin),
        max: Math.round(totalMax),
        breakdown: {
            baseMowing: { min: Math.round(baseMin * totalMultiplier), max: Math.round(baseMax * totalMultiplier) },
            multipliers: totalMultiplier,
            surcharges: 0,
            extras,
        },
    };
};
