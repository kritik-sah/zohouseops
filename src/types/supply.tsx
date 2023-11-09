export interface SupplyItem {
    name: string;
    count: number;
    id: number;
}

export interface RequestSupplyProps {
    onClose: () => void;
    open: boolean;
}