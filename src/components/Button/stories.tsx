import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
} as Meta<ButtonProps>;

export const Template: Story<ButtonProps> = (args) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Button isClearButton={true} text="Limpar Campos" />
      <Button isClearButton={false} text="Simular" />
    </div>
  );
};
