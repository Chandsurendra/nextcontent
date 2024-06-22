import PoCard from '@/app/components/Card';
import client from '@/app/lib/Contentful';

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
export const revalidate = 60; // Revalidate the data every 60 seconds

export default async function Page() {
  const postcards = await fetchPostcards();

  return (
    <div
      id="postcards"
      className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {postcards.map((postcard) => (
          <PoCard
            key={postcard.id}
            link={`/bbs2nd/${postcard.id}`}
            title={postcard.title}
            details={postcard.details}
            image={postcard.image}
          />

      ))}
    </div>
  );
}
