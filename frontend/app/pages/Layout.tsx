import Button from "@componentsbutton";
import React from "react";
type LayoutProps = object;

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

export default Layout;
