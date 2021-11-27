import React, { FC, HTMLAttributes } from "react";
import styles from "./Select.module.css";

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  options: object;
  value: string;
}

const Select: FC<SelectProps> = ({ options, name, value, ...rest }) => {
  return (
    <select value={value} name={name} className={styles.select} {...rest}>
      {Object.keys(options).map((o) => (
        <option value={o} key={o}>
          {o}
        </option>
      ))}
    </select>
  );
};

export default Select;
