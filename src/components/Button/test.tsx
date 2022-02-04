import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Button, ButtonProps } from ".";

const props: ButtonProps = {
  title: "any",
};

describe("<Button />", () => {
  it("should render", () => {
    renderTheme(<Button {...props} />);

    expect(screen.getByRole("heading", { name: "Oi" })).toBeInTheDocument();
  });
});
