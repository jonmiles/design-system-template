import * as React from "react";

import "../../theme/custom.scss";

interface Props {
  /**
   * The buttons content, typically this is text but it can be any
   * valid JSX element.
   **/
  children: React.ReactNode;

  /**
   * Is called in response to the user clicking the button.
   *
   * @default () => {}
   **/
  onClick: () => void;

  /**
   * Disables the user interaction (i.e. click event) and renders the button in
   * a ghosted state
   */
  disabled?: boolean;
}

export const PrimaryButton: React.FC<Props> = ({
  children,
  onClick,
  disabled
}) => (
  <button className="btn btn-primary" disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

PrimaryButton.defaultProps = {
  onClick: () => {},
  disabled: false
};

export default PrimaryButton;
