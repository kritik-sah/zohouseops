export interface ProofOfWorkProps {
    setImage: (image: unknown) => void;
    image: string | null;
    id: string;
}
export interface LaundryProps {
    countAction: (count: number) => void;
    count: number;
    setImage: (image: unknown) => void;
    image: string | null;
    title: string;
    id: string;
}

