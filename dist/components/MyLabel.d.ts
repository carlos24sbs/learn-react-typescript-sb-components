/// <reference types="react" />
import "./mylabel.css";
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
    fontColor?: string;
    /**
     * Font colot
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
