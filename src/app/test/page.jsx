// 'use client'
// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import 'react-pdf/dist/Page/TextLayer.css';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// function MyApp() {
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1); // eslint-disable-line no-unused-vars

//   function onDocumentLoadSuccess({ numPages }){
//     setNumPages(numPages);
//   }

//   return (
//     <div className='w-full '>
//       <Document className={'bg-black'} file="https://assets.ctfassets.net/n2pd1snexh20/4BBTyXa7psyoiAWeXyJJHB/a2cbeab2d1aa43352ff3be692b30545e/170902439777.pdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} className='w-full bg-black'/>
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }
// export default MyApp
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import React from 'react';
import Sample from './sample';

const page = () => {
  return (
    <div>
      <Sample />
    </div>
  );
};

export default page;
