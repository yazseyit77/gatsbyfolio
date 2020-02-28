import React from "react";

export const Row = ({ children }) => {
    return (
        <div className="row flex" style={{ color: "#C5C5C5" }}>
            {children}
        </div>
    );
};

export const Col = ({ children }) => {
    return (
        <div className="col">
            <div>{children}</div>
        </div>
    );
};
