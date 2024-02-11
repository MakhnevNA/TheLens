export type TValue = string | null;

export interface IOptions {
    id: number;
    title: string;
}

export interface ISelectProps {
    options: IOptions[];
    value: TValue;
    onSelect: (newValue: string) => void;
    name: string;
    placeholderName: string;
    isOpen?: boolean;
}

export interface IHeaderProps {
    value: TValue;
    isOpenSelect: boolean;
    name: string;
    placeholderName: string;
}

export interface IMenuProps {
    options: IOptions[];
    isOpenSelect: boolean;
    value: TValue;
}

export interface IOptionProps {
    value: TValue;
    option: IOptions;
}

export interface IPlaceholder {
    placeholderName: string;
}
