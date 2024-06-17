'use client';

// import { useState } from 'react';
// import { pdfjs, Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// const options = {
//   cMapUrl: '/cmaps/',
//   standardFontDataUrl: '/standard_fonts/',
// };

// export default function Sample() {
//   const [numPages, setNumPages] = useState();

//   const wi = window.innerWidth;
//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div>
//       <header>
//         <h1>react-pdf sample page</h1>
//       </header>
//       <div className="m-1 flex w-full max-w-full flex-col items-center p-1">
//         <Document
//           file={
//             'https://assets.ctfassets.net/n2pd1snexh20/4BBTyXa7psyoiAWeXyJJHB/a2cbeab2d1aa43352ff3be692b30545e/170902439777.pdf.pdf'
//           }
//           onLoadSuccess={onDocumentLoadSuccess}
//           options={options}
//         >
//           {Array.from(new Array(numPages), (el, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               width={wi - 10}
//             />
//           ))}
//         </Document>
//       </div>
//     </div>
//   );
// }
// components/PdfViewer.js

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ fileUrl }) => {

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer 
                    fileUrl={fileUrl}
                    plugins={[defaultLayoutPlugin]}
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;
