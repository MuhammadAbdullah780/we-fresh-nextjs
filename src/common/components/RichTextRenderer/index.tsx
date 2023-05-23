import React from "react";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// Types
type Props = {
  json: Document;
  paraStyle?: string;
  h1Style?: string;
  h2Style?: string;
  h3Style?: string;
  h4Style?: string;
  h5Style?: string;
  h6Style?: string;
};

const RichTextRenderer = ({
  json,
  h1Style,
  h3Style,
  h2Style,
  h4Style,
  h6Style,
  h5Style,
  paraStyle,
}: Props) => {
  const configurations = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className={paraStyle || ""}>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className={h1Style || ""}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className={h2Style || ""}>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className={h3Style || ""}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <h4 className={h4Style || ""}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: any) => (
        <h5 className={h5Style || ""}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: any) => (
        <h6 className={h6Style || ""}>{children}</h6>
      ),
    },
  };

  return <>{documentToReactComponents(json, configurations)}</>;
};

export default RichTextRenderer;
