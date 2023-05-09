export interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
    handleSubmit: (event: any) => void;
}