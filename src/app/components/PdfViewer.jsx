'use client';

import { useState } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

// const resizeObserverOptions = {};

// const maxWidth = 1000;

export default function Sample() {
  const [numPages, setNumPages] = useState();
  // const [containerRef, setContainerRef] = useState(null);
  // const [containerWidth, setContainerWidth] = useState();

  // const onResize = useCallback((entries) => {
  //   const [entry] = entries;

  //   if (entry) {
  //     setContainerWidth(entry.contentRect.width);
  //   }
  // }, []);

  // useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <header>
        <h1>react-pdf sample page</h1>
      </header>
      <div
        className="m-1 flex w-full max-w-full flex-col items-center p-1"
        // ref={setContainerRef}
      >
        <Document
          file={
            'https://assets.ctfassets.net/n2pd1snexh20/4BBTyXa7psyoiAWeXyJJHB/a2cbeab2d1aa43352ff3be692b30545e/170902439777.pdf.pdf'
          }
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={1000}
              // width={
              //   containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              // }
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
