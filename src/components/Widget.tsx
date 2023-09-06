import React from "react";

export interface IWidgetProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  amount: number;
  title?: string;
}

const Widget: React.FunctionComponent<IWidgetProps> = (props) => {
  const { children, amount, title, style } = props;
  let _style: React.CSSProperties = style || {};

  return (
    <div style={_style} {...props}>
      {" "}
      {title || "Widget"} {amount} {children}
    </div>
  );
};

export default Widget;
