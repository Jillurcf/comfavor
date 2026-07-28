import Image from 'next/image';
import { type BlogContentBlock } from '@/lib/data/blog';

function ContentHeading({ block }: { block: BlogContentBlock & { type: 'heading' } }) {
  const Tag = `h${block.level}` as const;
  const sizes = { 1: 'text-3xl', 2: 'text-2xl', 3: 'text-xl' };
  return (
    <Tag className={`mb-4 mt-8 font-bold text-gray-900 ${sizes[block.level]}`}>{block.text}</Tag>
  );
}

function ContentParagraph({ block }: { block: BlogContentBlock & { type: 'paragraph' } }) {
  return <p className="mb-4 leading-relaxed text-gray-700">{block.text}</p>;
}

function ContentList({ block }: { block: BlogContentBlock & { type: 'list' } }) {
  const ListTag = block.ordered ? 'ol' : 'ul';
  return (
    <ListTag className={`mb-4 ml-6 space-y-2 ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
      {block.items.map((item, i) => (
        <li key={i} className="leading-relaxed text-gray-700">
          {item}
        </li>
      ))}
    </ListTag>
  );
}

function ContentImage({ block }: { block: BlogContentBlock & { type: 'image' } }) {
  return (
    <div className="mb-6">
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        <Image src={block.src} alt={block.alt} fill className="object-cover" />
      </div>
      {block.caption && <p className="mt-2 text-center text-sm text-gray-500">{block.caption}</p>}
    </div>
  );
}

function ContentCode({ block }: { block: BlogContentBlock & { type: 'code' } }) {
  return (
    <div className="mb-6 overflow-x-auto rounded-lg bg-gray-900">
      <pre className="p-4 text-sm text-green-400">
        <code>{block.code}</code>
      </pre>
    </div>
  );
}

function ContentQuote({ block }: { block: BlogContentBlock & { type: 'quote' } }) {
  return (
    <blockquote className="mb-6 border-l-4 border-[var(--primary-color)] bg-green-50 py-4 pl-6 pr-4 italic text-gray-700">
      <p>{block.text}</p>
      {block.author && (
        <footer className="mt-2 text-sm font-medium not-italic text-gray-500">
          — {block.author}
        </footer>
      )}
    </blockquote>
  );
}

function ContentDivider() {
  return <hr className="mb-6 border-gray-200" />;
}

export default function BlogContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <article>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return <ContentHeading key={index} block={block} />;
          case 'paragraph':
            return <ContentParagraph key={index} block={block} />;
          case 'list':
            return <ContentList key={index} block={block} />;
          case 'image':
            return <ContentImage key={index} block={block} />;
          case 'code':
            return <ContentCode key={index} block={block} />;
          case 'quote':
            return <ContentQuote key={index} block={block} />;
          case 'divider':
            return <ContentDivider key={index} />;
          default:
            return null;
        }
      })}
    </article>
  );
}
