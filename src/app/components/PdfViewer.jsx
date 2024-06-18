'use client';

import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

export default function PdfViewer({pdf}) {
  const [numPages, setNumPages] = useState();
/*
  window.addEventListener('resize', () => {
    wi = window.innerWidth; //eslint-disable-line no-undef
  });*/

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <header>
        <h1>react-pdf sample page</h1>
      </header>
      <div className="m-1 flex w-full max-w-full flex-col items-center p-1">
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width='90%'
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
// components/PdfViewer.js

// import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// const PdfViewer = ({ fileUrl }) => {

//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
//                 <Viewer 
//                     fileUrl={fileUrl}
//                 />
//             </Worker>
//         </div>
//     );
// };

// export default PdfViewer;
