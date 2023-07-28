import { Document } from '@contentful/rich-text-types';

export type RichText = {
  json: Document;
  links?: Links;
};

export type ErrorPayloadMessage = {
  message: string;
  extensions: {
    contentful: {
      code: string;
      requestId: string;
      details: {
        maximumCost: number;
        cost: number;
      };
    };
  };
};

export type ErrorPayload = {
  errors: ErrorPayloadMessage[];
};

export type Post = {
  title: string;
  slug: string;
  subtitle: string;
  description: RichText;
  imagesCollection: {
    items: Asset[];
  };
};

export type Page = {
  title: string;
  description: RichText;
  coverImage?: Asset;
};

export type Asset = {
  sys: { id: string };
  contentType: string;
  title: string;
  description: string;
  url: string;
  width: number;
  height: number;
};

export type EmbeddedEntry = {
  sys: { id: string };
  shareLink: string;
};
