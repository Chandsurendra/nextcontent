import React from 'react';
import Sample from '../components/PdfViewer';
const pdf = 'https://assets.ctfassets.net/n2pd1snexh20/4BBTyXa7psyoiAWeXyJJHB/a2cbeab2d1aa43352ff3be692b30545e/170902439777.pdf.pdf'
const page = () => {
  return (
    <div>
      <Sample  fileUrl={pdf}/>
    </div>
  );
};

export default page;
