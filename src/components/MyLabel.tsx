import "./mylabel.css";
import { AllCaps } from "../stories/components/MyLabel.stories";

export interface MyLabelProps {
  /**
   * If is true convert text to upper case
   */
  allCaps?: boolean;
  /**
   * Basic color for component
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Text label to display
   */
  label: string;
  /**
   * Size of text
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Font colot
   */
  fontColor?: string
  /**
   * Font colot
   */
  backgroundColor?: string
}

export const MyLabel = ({
  allCaps,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
  backgroundColor='transparent'
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor, backgroundColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
