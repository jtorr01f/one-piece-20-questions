export interface RadioOptions {
  options: { id: string, value: string, label: string }[];
  selectedValue: string;
  setSelectedValue: (eventValue) => void
}
