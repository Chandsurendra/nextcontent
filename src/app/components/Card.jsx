/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function PoCard({ title, details, link, image }) {
  return (
    <Card
      key="1"
      className="relative mx-auto max-w-sm overflow-hidden rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
    >
      <div className="absolute grid h-28 w-28 content-center justify-center rounded-full text-5xl">
        {title}
      </div>
      <div className="absolute left-12 top-12 grid h-52 w-60 content-end rounded-tl-[50px] text-lg">
        {details}
      </div>
      <Image
        alt="Profile picture"
        className="w-full object-cover"
        height="320"
        src={'https:' + image}
        style={{ aspectRatio: '320/320', objectFit: 'cover' }}
        width="320"
      />
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold transition-all duration-200 hover:text-gray-700">
          {title}
        </h2>
        <h3 className="text-gray-500 transition-all duration-200 hover:text-gray-600">
          {details}
        </h3>

        <div className="mt-4 flex space-x-2">
          <Link href={link}>
            <Button
              className="w-full transition-all duration-200 hover:bg-gray-700 hover:text-white"
              size="sm"
            >
              Read more
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
