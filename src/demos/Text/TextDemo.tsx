import React from "react";
import { Text } from "../../../lib/components/Text";
import "./TextDemo.css";

const TextDemo: React.FC = () => {
  
  return (
    <div className="text-demo">
      <h1>Text Component Demo</h1>

      <Text variant="body.md">Hello</Text>
    </div>
  );
};

export default TextDemo;
