export interface Profile {
    // Define any props your component receives here
}
export interface Shift {
    start: Date | null; // Change the type to Date or null if needed
    end: Date | null; // Change the type to Date or null if needed
}

export interface LocationType {
    latitude: number;
    longitude: number;
}