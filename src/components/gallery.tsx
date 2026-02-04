"use client"

import * as React from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = React.useState(-1)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {images.map((src, i) => (
          <div 
            key={i} 
            className="cursor-pointer overflow-hidden rounded-lg border hover:opacity-80 transition shadow-sm"
            onClick={() => setIndex(i)}
          >
            <img src={src} alt={`Page ${i + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map(src => ({ src }))}
      />
    </>
  )
}