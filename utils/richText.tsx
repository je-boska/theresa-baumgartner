import { Asset, EmbeddedEntry, RichText } from '@/types/shared';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Block, INLINES, Inline } from '@contentful/rich-text-types';
import Image from 'next/image';
import { ReactNode } from 'react';

const getAssetById = (id: string, assets: Asset[]) =>
  assets.filter((asset) => asset.sys.id === id).pop();

const getEntryById = (id: string, entries: EmbeddedEntry[]) =>
  entries.filter((entry) => entry.sys.id === id).pop();

export function renderRichTextWithMedia(document: RichText) {
  if (document && document.links) {
    const blockAssets = document.links.assets.block;
    const blockEntries = document.links.entries.block;

    return (
      <div className='rich-text'>
        {documentToReactComponents(document.json, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
              const asset = getAssetById(node.data.target.sys.id, blockAssets);
              if (!asset) return;

              return (
                <Image
                  src={asset?.url}
                  alt={asset.title}
                  height={asset.height}
                  width={asset.width}
                />
              );
            },

            [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
              const entry = getEntryById(node.data.target.sys.id, blockEntries);
              if (!entry) return;
              console.log(entry);
              if (entry.shareLink.includes('vimeo')) {
                return (
                  <div className='iframe-container'>
                    <iframe
                      src={`https://player.vimeo.com/video/${entry.shareLink.slice(
                        -9
                      )}`}
                      width='100%'
                      allow='autoplay; fullscreen; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              }
              if (entry.shareLink.includes('youtu.be')) {
                return (
                  <div className='iframe-container'>
                    <iframe
                      src={`https://www.youtube.com/embed/${entry.shareLink.slice(
                        -11
                      )}`}
                      width='100%'
                      allowFullScreen
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    />
                  </div>
                );
              }
            },
            [INLINES.HYPERLINK]: (
              link: Block | Inline,
              children: ReactNode
            ) => {
              return (
                <a
                  href={link.data.uri}
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                >
                  {children}
                </a>
              );
            },
          },
        })}
      </div>
    );
  }
}
