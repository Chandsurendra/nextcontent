const contentful = require('contentful');
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});
export default client;

// import { createClient } from 'contentful';

// const client =contentful.createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

export async function fetchPostcards() {
    const response = await client.getEntries({ content_type: 'postcard' });
    return response.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        pdfUrl: item.fields.pdf.fields.file.url,
        image: item.fields.image.fields.file.url,
        details: item.fields.unit,
    }));
}

export async function fetchPostcardById(id) {
    const response = await client.getEntry(id);
    return {
        id: response.sys.id,
        title: response.fields.title,
        pdfUrl: response.fields.pdf
    };
}
