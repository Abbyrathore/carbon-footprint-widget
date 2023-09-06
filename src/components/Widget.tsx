import React from "react";
import "../../assets/styles/style.css";
// import leafImage from "../../assets/images/leaf.png";

export interface IWidgetProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  amount: number;
  title?: string;
}

export const Widget: React.FunctionComponent<IWidgetProps> = (props) => {
  const { children, amount, title, style } = props;
  let _style: React.CSSProperties = style || {};

  return (
    <>
      <div style={_style} {...props} className="widget-container">
        <div className="widget-image-container">
          {/* <img src={leafImage} alt="" className="widget-leaf-img" /> */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 123 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80.87 19.54C76.72 20.11 72.51 20.38 68.44 21.31C52.13 25.05 38.42 33.38 26.88 45.42C17.16 55.55 9.94 67.2 5.2 80.4C4.96 81.07 4.63 81.72 3.7 82.42C2.97 79.15 2.12 75.89 1.53 72.6C-0.240001 62.69 -0.740001 52.71 1.5 42.83C5.24 26.39 15.11 14.72 30.24 7.52C42.6 1.64 55.79 -0.370004 69.37 0.0599964C86.32 0.589996 102.3 4.57 116.68 13.91C117.8 14.63 118.89 15.41 119.93 16.24C123.18 18.83 122.9 21.4 119.65 23.88C114.77 27.61 109.87 31.38 105.42 35.6C98.35 42.3 94.15 50.97 90 59.65C86.52 66.92 83.21 74.33 79.05 81.21C73.59 90.24 64.8 94.75 54.62 96.56C45.76 98.14 36.86 97.71 27.97 96.68C23.93 96.21 23.83 96.24 23.18 100.3C21.74 109.28 20.75 118.3 21.89 127.4C22.11 129.13 21.39 129.63 19.82 129.61C16.57 129.57 13.31 129.53 10.07 129.62C8.2 129.67 7.64 128.93 7.68 127.1C7.88 116.57 9.36 106.24 12.07 96.06C16.31 80.1 22.73 65.24 33.72 52.66C42.6 42.49 53.27 34.59 65.18 28.35C69.74 25.96 74.56 24.06 79.26 21.92C79.94 21.61 80.58 21.2 81.25 20.83C81.11 20.4 80.99 19.97 80.87 19.54Z"
              fill="#32AB3A"
            />
          </svg>
        </div>
        <div className="widget-heading-container">
          <p className="widget-heading">Carbon Neutral Order for ${amount}</p>{" "}
          <p className="widget-footer">Powered by xyz</p>
        </div>
        <div>
          <span></span>
        </div>
      </div>
      <div>
        <p>{title}</p>
        {children}
      </div>
    </>
  );
};
