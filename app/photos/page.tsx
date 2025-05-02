import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Great Camlica Mosque",
            href: "https://unsplash.com/photos/kHn_mR9IEFY",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Camlica Hill",
            href: "https://unsplash.com/photos/HoiSTlbom80",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Camlica Hill",
            href: "https://unsplash.com/photos/y9xGVXfI2YQ",
          }
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
        ]}
      />
    </section>
  );
}
