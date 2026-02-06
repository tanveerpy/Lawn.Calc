export type Region = 'US' | 'US_MO_CAPE' | 'CA' | 'AU' | 'NZ' | 'UK';
export type Unit = 'sqft' | 'sqm' | 'acre';
export type Frequency = 'weekly' | 'biweekly' | 'monthly' | 'onetime';
export type Terrain = 'flat' | 'sloped' | 'complex';
export type GrassHeight = 'standard' | 'tall' | 'overgrown';

export const REGIONS: Record<string, string> = {
    US: 'United States (National)',
    US_MO_CAPE: 'USA - Cape Girardeau, MO',
    CA: 'Canada',
    AU: 'Australia',
    NZ: 'New Zealand',
    UK: 'United Kingdom',
};

export const CURRENCIES: Record<Region, string> = {
    US: '$',
    US_MO_CAPE: '$',
    CA: 'CAD $',
    AU: 'AUD $',
    NZ: 'NZD $',
    UK: '£',
};

// Base Rate per Square Foot (normalized)
// - US: $50-$100 for < 1/4 acre (approx 10,000 sqft) -> $0.005 - $0.01 / sqft
// - Cape: $23-$47 for std yard (approx 5000 sqft) -> $0.0046 - $0.0094 / sqft
// - UK: £30 per 100m2 -> £0.30 per m2 -> £0.028 per sqft
export const BASE_RATES_SQFT: Record<Region, { min: number; max: number; minFee: number }> = {
    US: { min: 0.004, max: 0.008, minFee: 50 },
    US_MO_CAPE: { min: 0.004, max: 0.009, minFee: 11 }, // Special low min from user data
    CA: { min: 0.005, max: 0.009, minFee: 50 }, // Approx conversion
    AU: { min: 0.004, max: 0.008, minFee: 60 },
    NZ: { min: 0.0025, max: 0.003, minFee: 49.90 }, // 0.28-0.33 per m2 -> ~0.026-0.03 per sqft *conversion is /10.76
    UK: { min: 0.025, max: 0.04, minFee: 30 }, // High density
};

// Logic: 1 m2 = 10.764 sqft
// NZ: $0.28 / m2 = $0.28 / 10.764 sqft = ~ $0.026 / sqft
// UK: £30 / 100m2 = £0.30 / m2 = ~ £0.028 / sqft

export const MULTIPLIERS = {
    frequency: {
        weekly: 1.0,
        biweekly: 1.25,
        monthly: 1.75, // +75% to 100%
        onetime: 2.0, // Premium
    },
    height: {
        standard: 1.0,
        tall: 1.5,
        overgrown: 2.5,
    },
    terrain: {
        flat: 1.0,
        sloped: 1.2, // +20%
        complex: 1.25, // +25%
    },
};

export const ANCILLARY_SERVICES: Record<Region, Record<string, { min: number; max: number }>> = {
    US: {
        edging: { min: 20, max: 40 },
        fertilization: { min: 50, max: 120 },
        aeration: { min: 75, max: 250 },
        leafRemoval: { min: 150, max: 400 },
    },
    US_MO_CAPE: {
        edging: { min: 15, max: 30 },
        fertilization: { min: 40, max: 100 },
        aeration: { min: 60, max: 200 },
        leafRemoval: { min: 100, max: 300 },
    },
    CA: {
        edging: { min: 25, max: 50 },
        fertilization: { min: 60, max: 140 },
        aeration: { min: 90, max: 300 },
        leafRemoval: { min: 180, max: 500 },
    },
    AU: {
        edging: { min: 30, max: 60 },
        fertilization: { min: 70, max: 150 },
        aeration: { min: 100, max: 350 },
        leafRemoval: { min: 200, max: 550 },
    },
    NZ: {
        edging: { min: 30, max: 50 },
        fertilization: { min: 65, max: 140 },
        aeration: { min: 95, max: 320 },
        leafRemoval: { min: 190, max: 500 },
    },
    UK: {
        edging: { min: 15, max: 30 },
        fertilization: { min: 40, max: 90 },
        aeration: { min: 60, max: 200 },
        leafRemoval: { min: 120, max: 300 },
    },
};
