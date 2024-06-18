import Link from 'next/link';
import { fetchPostcards } from '@/app/lib/Contentful';

export const revalidate = 60; // Revalidate the data every 60 seconds

export default async function Page() {
    const postcards = await fetchPostcards();

    return (
        <div id="postcards">
            {postcards.map((postcard) => (
                <Link key={postcard.id} href={`/bbs2nd/${postcard.id}`}>
                    <div className="card">{postcard.title}</div>
                    <h5>{postcard.pdfUrl}</h5>
                </Link>
            ))}
        </div>
    );
}
