interface LabelledValue {
    label: string;
}
declare function printLabel(labelledObj: LabelledValue): void;
declare let myObj: {
    size: number;
    label: string;
};
