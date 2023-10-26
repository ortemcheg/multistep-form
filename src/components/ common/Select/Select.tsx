import React from "react";
import {
  Button,
  Item,
  Label,
  ListBox,
  Popover,
  Select as Selecter,
  SelectValue,
} from "react-aria-components";
import type { ItemProps } from "react-aria-components";
import styles from "./Select.module.scss";

const ChevronUpDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.80586 9.28013C4.3981 8.87238 4.39805 8.21484 4.80569 7.80702C5.2056 7.39899 5.87133 7.39905 6.27119 7.79891L11.9961 13.5238L17.7209 7.80686C18.1287 7.39905 18.7863 7.39905 19.1941 7.80686C19.602 8.21466 19.602 8.87232 19.1941 9.28013L12.5937 15.8806C12.2653 16.209 11.7347 16.209 11.4063 15.8806L4.80586 9.28013Z"
      fill="#817CA5"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M12.4733 4.80667C12.4114 4.74418 12.3376 4.69458 12.2564 4.66074C12.1752 4.62689 12.088 4.60947 12 4.60947C11.912 4.60947 11.8249 4.62689 11.7436 4.66074C11.6624 4.69458 11.5886 4.74418 11.5267 4.80667L6.56001 9.78L4.47334 7.68667C4.40899 7.62451 4.33303 7.57563 4.2498 7.54283C4.16656 7.51003 4.07768 7.49394 3.98822 7.49549C3.89877 7.49703 3.8105 7.51619 3.72844 7.55185C3.64639 7.58751 3.57217 7.63898 3.51001 7.70333C3.44785 7.76768 3.39897 7.84364 3.36617 7.92688C3.33337 8.01011 3.31728 8.099 3.31883 8.18845C3.32038 8.2779 3.33953 8.36618 3.37519 8.44823C3.41085 8.53028 3.46233 8.60451 3.52667 8.66667L6.08667 11.2267C6.14865 11.2892 6.22238 11.3387 6.30362 11.3726C6.38486 11.4064 6.472 11.4239 6.56001 11.4239C6.64802 11.4239 6.73515 11.4064 6.81639 11.3726C6.89763 11.3387 6.97137 11.2892 7.03334 11.2267L12.4733 5.78667C12.541 5.72424 12.595 5.64847 12.632 5.56414C12.6689 5.4798 12.688 5.38873 12.688 5.29667C12.688 5.2046 12.6689 5.11353 12.632 5.02919C12.595 4.94486 12.541 4.86909 12.4733 4.80667Z"
      fill="#5845DD"
    />
  </svg>
);

// TODO ? add isError, use discriminated union ?
interface SelectProps {
  label: string;
  disabled?: boolean;
  errorMessage?: string;
}

const Select: React.FC<SelectProps> = ({ label, disabled, errorMessage }) => {
  console.log("hello from select", { label, disabled, errorMessage });
  return (
    <Selecter>
      <Label className={styles.label}>Country</Label>
      <Button className={styles.button}>
        <SelectValue className={styles.buttonValue} />
        <ChevronUpDownIcon />
      </Button>
      <Popover className={styles.popover}>
        <ListBox>
          <ListBoxItem>Afghanistan</ListBoxItem>
          <ListBoxItem>Turkmenistan</ListBoxItem>
          <ListBoxItem>Russia</ListBoxItem>
          <ListBoxItem>United Arab Emirates</ListBoxItem>
          <ListBoxItem>United States of America</ListBoxItem>
          <ListBoxItem>Uzbekistan</ListBoxItem>
        </ListBox>
      </Popover>
    </Selecter>
  );
};

function ListBoxItem(props: ItemProps & { children: React.ReactNode }) {
  return (
    <Item {...props} className={styles.item}>
      {({ isSelected }) => (
        <>
          <span className={isSelected ? styles.selectedItem : ""}>
            {props.children}
          </span>
          <span>{isSelected && <CheckIcon />}</span>
        </>
      )}
    </Item>
  );
}

export default Select;
