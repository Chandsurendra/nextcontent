import PdfViewer from '@/app/components/PdfViewer';
import {fetchPostcards } from '@/app/bbs2nd/page';
import client from '@/app/lib/Contentful';

export async function fetchPostcardById(id) {
  const response = await client.getEntry(id);
  return {
      id: response.sys.id,
      title: response.fields.title,
      pdfUrl: response.fields.pdf.fields.file.url,
  };
}

export async function generateStaticParams() {
  const postcards = await fetchPostcards();
  return postcards.map((postcard) => ({ id: postcard.id }));
}

export default async function PostcardPage({ params }) {
  const { id } = params;
  const postcard = await fetchPostcardById(id);

  return (
    <div>
      <h1>{postcard.title}</h1>
      <div id="pdf-viewer">
        <PdfViewer pdf={'https:' + postcard.pdfUrl} />
      </div>
    </div>
  );
}
