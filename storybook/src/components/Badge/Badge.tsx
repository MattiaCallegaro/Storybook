import type React from "react";
import root from "react-shadow";
import css from "./Badge.css?raw";


type BadgeProps = {
    children: React.ReactNode;
    variant?: "neutral" | "positive" | "negative";
} & React.HTMLAttributes<HTMLSpanElement>;

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = "neutral",
    ...attrs
}) => {
    return (
        <root.span>
            <style>{css}</style>
            <span className={`badge ${variant}`} {...attrs}>
                {children}
            </span>
        </root.span>
    );
};