import * as React from "react";

import "./Host.scss";

const Host = (props: { children: React.ReactNode }) => (
  <div className="Host__Container">{props.children}</div>
);

export default Host;
