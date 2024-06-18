import PdfViewer from '@/app/components/PdfViewer';
import { fetchPostcardById, fetchPostcards } from '@/app/lib/Contentful';
// import { useEffect, useState } from 'react';
// import { Document, Page } from 'react-pdf';

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
                <PdfViewer pdf={'https:'+postcard.pdfUrl.fields.file.url} />
                
            
            </div>
        </div>
    );
}
