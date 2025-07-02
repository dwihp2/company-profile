'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Card, CardContent } from './card';

// Define the Media type similar to Payload CMS structure
interface Media {
  url: string;
  alt?: string;
  [key: string]: unknown;
}

interface GalleryImage {
  image: Media | number | Record<string, unknown>; // To accommodate Payload CMS Media type
  caption?: string | null;
  id?: string | null;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
}

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Filter valid images for the lightbox
  const validImages = images.filter((item) =>
    typeof item.image === 'object' && item.image !== null && 'url' in item.image
  );

  // Create slides for the lightbox
  const slides = validImages.map((item) => ({
    src: (item.image as Media).url,
    alt: (item.image as Media).alt || item.caption || 'Gallery image',
  }));

  const handleImageClick = (imageIndex: number) => {
    // Find the corresponding index in the filtered array
    const validImageIndex = validImages.findIndex((img) =>
      images.indexOf(img) === imageIndex
    );

    if (validImageIndex !== -1) {
      setIndex(validImageIndex);
      setOpen(true);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((item, idx) => (
          <Card
            key={`gallery-${idx}`}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleImageClick(idx)}
          >
            <div className="aspect-square bg-muted relative">
              {item.image && typeof item.image === 'object' && 'url' in item.image && typeof item.image.url === 'string' ? (
                <Image
                  src={item.image.url}
                  alt={typeof item.image.alt === 'string' ? item.image.alt : item.caption?.toString() || `Gallery image ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Image {idx + 1}
                </div>
              )}
            </div>
            {item.caption && (
              <CardContent className="p-3">
                <p className="text-xs text-muted-foreground truncate">{item.caption}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {slides.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      )}
    </>
  );
}
