import React from "react";
import { Text } from "../../../lib/components/Text";
import "./TextDemo.css";
import Block from "../../../lib/components/Block/Block";

const TextDemo: React.FC = () => {
  return (
    <div className="text-demo">
      <h1>Text Component Demo</h1>

      <Text variant="body.md">Hello</Text>
      <Block
        as="article"
        paddingX="16px"
        paddingY="16px"
        style={{ border: "1px solid red", borderRadius: "8px" }}
      >
        <Text variant="body.md" color="red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          recusandae iusto vero eaque quaerat quia quod at, amet, reiciendis
          neque atque nulla, beatae natus ex illum obcaecati ab repellendus?
          Quam sit cumque iste natus laudantium magni quisquam repudiandae eos
          assumenda molestiae quis dignissimos, ratione commodi, minima debitis
          odit, nobis totam mollitia ad dolor laboriosam eius! Sit, explicabo
          illum obcaecati magni iure quod eaque provident minus dolorum impedit,
          tempore perspiciatis! Sunt nostrum quibusdam laborum quas laudantium
          velit tenetur? Sapiente aperiam tenetur iure repudiandae hic assumenda
          omnis dolorem dolore ad. Excepturi sunt totam, explicabo consequuntur
          exercitationem quaerat illum aliquid laborum repellat impedit.
        </Text>
        <Text variant="body.md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          recusandae iusto vero eaque quaerat quia quod at, amet, reiciendis
          neque atque nulla, beatae natus ex illum obcaecati ab repellendus?
          Quam sit cumque iste natus laudantium magni quisquam repudiandae eos
          assumenda molestiae quis dignissimos, ratione commodi, minima debitis
          odit, nobis totam mollitia ad dolor laboriosam eius! Sit, explicabo
          illum obcaecati magni iure quod eaque provident minus dolorum impedit,
          tempore perspiciatis! Sunt nostrum quibusdam laborum quas laudantium
          velit tenetur? Sapiente aperiam tenetur iure repudiandae hic assumenda
          omnis dolorem dolore ad. Excepturi sunt totam, explicabo consequuntur
          exercitationem quaerat illum aliquid laborum repellat impedit.
        </Text>
      </Block>
    </div>
  );
};

export default TextDemo;
