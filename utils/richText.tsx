import { RichText } from '@/types/shared';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Block, Inline } from '@contentful/rich-text-types';
import Image from 'next/image';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
      return (
        <Image
          src={'http:' + node.data.target.fields.file.url}
          alt=''
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
        />
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
      if (node.data.target.sys.contentType.sys.id === 'youtubeEmbed') {
        return (
          <div className='youtube-iframe-container'>
            <iframe
              src={`https://www.youtube.com/embed/${node.data.target.fields.shareLink.slice(
                -11
              )}`}
              allowFullScreen
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
        );
      }
    },
  },
};

export function renderRichTextWithMedia(document: RichText) {
  return <div>{documentToReactComponents(document.json, options)}</div>;
}
