import * as React from "react";
import { withActions, action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Host from "../../../decorators/Host";
import { PrimaryButton } from "../PrimaryButton";

export default {
  title: "PrimaryButton",
  component: PrimaryButton,
  decorators: [withActions("click button"), withKnobs, withInfo]
  //   parameters: {
  //     info: {
  //       text: `

  //   #### Notes

  //   light button seen on <https://zpl.io/aM49ZBd>

  //   ## Usage
  //   ~~~js
  //   <PrimaryButton
  //     label={text('label', 'Enroll')}
  //     disabled={boolean('disabled',false)}
  //     onClick={() => alert('hello there')}
  //   />
  //   ~~~
  // `
  //     }
  //   }
};

export const Index = () => (
  <Host>
    <PrimaryButton
      onClick={() => {
        action("clicked");
      }}
    >
      Active Button
    </PrimaryButton>
    <PrimaryButton
      disabled
      onClick={() => {
        action("clicked");
      }}
    >
      Disabled Button
    </PrimaryButton>
  </Host>
);

export const Knobs = () => (
  <Host>
    <PrimaryButton
      disabled={boolean("Disabled", false)}
      onClick={() => {
        action("clicked");
      }}
    >
      {text("Label", "Button Label")}
    </PrimaryButton>
  </Host>
);
