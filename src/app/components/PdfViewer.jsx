'use client';

import {  useEffect, useState } from 'react';
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
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  }, []);


  function onDocumentLoadSuccess({ numPages: nextNumPages }){
    setNumPages(nextNumPages);
  }

  return (
    
      
        <div className="items-center content-center" >
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={width - 100}
              />
            ))}
          </Document>
        </div>
  );
}