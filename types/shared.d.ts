import { Document } from '@contentful/rich-text-types';
import { ReactNode } from 'react';

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
  date: string;
  description: RichText;
  imagesCollection: {
    items: Asset[];
  };
};

export type Page = {
  title: string;
  description?: RichText;
  coverImage?: Asset;
  children?: ReactNode;
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

export type DateEntry = {
  title: string;
  date: string;
};
