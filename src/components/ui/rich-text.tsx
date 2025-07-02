import React from 'react';

interface LexicalNode {
  type: string;
  text?: string;
  format?: number;
  children?: LexicalNode[];
  tag?: string;
  listType?: string;
  fields?: {
    url?: string;
    newTab?: boolean;
  };
}

interface RichTextContent {
  root?: {
    children?: LexicalNode[];
  };
}

interface RichTextProps {
  content: RichTextContent | null | undefined;
  className?: string;
}

function serializeLexical(nodes: LexicalNode[]): React.ReactNode {
  return nodes?.map((node, index) => {
    if (!node) return null;

    if (node.type === 'text') {
      const textContent = node.text || '';
      let textElement: React.ReactNode = textContent;

      // Apply formatting based on node.format
      if (node.format) {
        if (node.format & 1) textElement = <strong>{textElement}</strong>;
        if (node.format & 2) textElement = <em>{textElement}</em>;
        if (node.format & 8) textElement = <u>{textElement}</u>;
        if (node.format & 32) textElement = <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{textElement}</code>;
      }

      return <span key={index}>{textElement}</span>;
    }

    switch (node.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4">
            {node.children && serializeLexical(node.children)}
          </p>
        );

      case 'heading':
        const level = parseInt(node.tag || '2');
        const HeadingTag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : 'h6';
        return React.createElement(
          HeadingTag,
          { key: index, className: 'font-semibold mb-3' },
          node.children && serializeLexical(node.children)
        );

      case 'list':
        const ListTag = node.listType === 'number' ? 'ol' : 'ul';
        return React.createElement(
          ListTag,
          { key: index, className: 'mb-4 ml-6 list-disc' },
          node.children && serializeLexical(node.children)
        );

      case 'listitem':
        return (
          <li key={index} className="mb-1">
            {node.children && serializeLexical(node.children)}
          </li>
        );

      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic mb-4">
            {node.children && serializeLexical(node.children)}
          </blockquote>
        );

      case 'link':
        return (
          <a
            key={index}
            href={node.fields?.url || '#'}
            className="text-blue-600 hover:underline"
            target={node.fields?.newTab ? '_blank' : undefined}
            rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
          >
            {node.children && serializeLexical(node.children)}
          </a>
        );

      case 'linebreak':
        return <br key={index} />;

      default:
        return (
          <div key={index}>
            {node.children && serializeLexical(node.children)}
          </div>
        );
    }
  });
}

export function RichText({ content, className = '' }: RichTextProps) {
  if (!content || !content.root?.children) {
    return null;
  }

  return (
    <div className={`prose prose-slate max-w-none dark:prose-invert ${className}`}>
      {serializeLexical(content.root.children)}
    </div>
  );
}
