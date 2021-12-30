import React from "react";

interface LayoutProps {}

const LayoutCon = ({ children }: React.PropsWithChildren<LayoutProps>) => {
    return <div className="max-w-1240 mt-20 sm:px-5 px-8 m-auto">{children}</div>;
};

export default LayoutCon;
