import React, { Fragment } from 'react';

export interface LexicalNode {
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

export interface SerializeLexicalProps {
  nodes: LexicalNode[];
}

export function serializeLexical({ nodes }: SerializeLexicalProps): React.ReactNode {
  return (
    <Fragment>
      {nodes?.map((node, index) => {
        if (node.type === 'text') {
          let text = <span key={index}>{node.text}</span>;

          if (node.format && node.format & 1) {
            text = <strong key={index}>{text}</strong>;
          }
          if (node.format && node.format & 2) {
            text = <em key={index}>{text}</em>;
          }
          if (node.format && node.format & 8) {
            text = <u key={index}>{text}</u>;
          }
          if (node.format && node.format & 32) {
            text = <code key={index} className="bg-gray-100 px-1 py-0.5 rounded text-sm">{text}</code>;
          }

          return text;
        }

        if (!node) {
          return null;
        }

        switch (node.type) {
          case 'paragraph':
            return (
              <p key={index}>
                {node.children && serializeLexical({ nodes: node.children })}
              </p>
            );

          case 'heading':
            if (node.tag === '1') {
              return (
                <h1 key={index}>
                  {node.children && serializeLexical({ nodes: node.children })}
                </h1>
              );
            } else if (node.tag === '2') {
              return (
                <h2 key={index}>
                  {node.children && serializeLexical({ nodes: node.children })}
                </h2>
              );
            } else if (node.tag === '3') {
              return (
                <h3 key={index}>
                  {node.children && serializeLexical({ nodes: node.children })}
                </h3>
              );
            } else if (node.tag === '4') {
              return (
                <h4 key={index}>
                  {node.children && serializeLexical({ nodes: node.children })}
                </h4>
              );
            } else if (node.tag === '5') {
              return (
                <h5 key={index}>
                  {node.children && serializeLexical({ nodes: node.children })}
                </h5>
              );
            } else {
              return (
                <h6 key={index}>
                  {node.children && serializeLexical({ nodes: node.children })}
                </h6>
              );
            }

          case 'list':
            const ListTag = node.listType === 'number' ? 'ol' : 'ul';
            return (
              <ListTag key={index}>
                {node.children && serializeLexical({ nodes: node.children })}
              </ListTag>
            );

          case 'listitem':
            return (
              <li key={index}>
                {node.children && serializeLexical({ nodes: node.children })}
              </li>
            );

          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic">
                {node.children && serializeLexical({ nodes: node.children })}
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
                {node.children && serializeLexical({ nodes: node.children })}
              </a>
            );

          case 'linebreak':
            return <br key={index} />;

          default:
            return (
              <div key={index}>
                {node.children && serializeLexical({ nodes: node.children })}
              </div>
            );
        }
      })}
    </Fragment>
  );
}
