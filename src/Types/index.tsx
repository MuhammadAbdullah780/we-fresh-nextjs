import { Document } from "@contentful/rich-text-types";

export type Button = {
  text: string;
  backgroundColor: string;
};

export type ImageType = {
  title: string;
  url: string;
};

export type RichText = {
  json: Document;
};

export type LinkType = {
  link: string;
  image: ImageType;
};
