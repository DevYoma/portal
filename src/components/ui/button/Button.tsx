import type React from "react";

type Prop = {
    text: string;
    styles?: React.CSSProperties;
}

const Button = ({ text, styles }: Prop) => {
    return (
        <button style={styles}>{text}</button>
    );
}

export default Button; 