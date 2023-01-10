import { FormImputLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input className="form-input" {...otherProps} />
      {label && (
        <FormImputLabel shrink={otherProps.value.length}>
          {label}
        </FormImputLabel>
      )}
    </Group>
  );
};

export default FormInput;
