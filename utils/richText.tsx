import { Asset, EmbeddedEntry, RichText } from '@/types/shared';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Block, Inline } from '@contentful/rich-text-types';
import Image from 'next/image';

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

              if (entry.shareLink.includes('youtu.be')) {
                return (
                  <div className='youtube-iframe-container'>
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
          },
        })}
      </div>
    );
  }
}
