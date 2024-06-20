/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ylZydb69iC6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unlock the power of data-driven insights
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our platform provides you with the tools and analytics you need
                to make informed decisions and drive your business forward.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/bbs2nd">
                <Button>Get Started</Button>
              </Link>

              <p className="text-xs text-muted-foreground">
                Sign up to unlock exclusive features and insights.{' '}
                <Link
                  href="#"
                  className="underline underline-offset-2"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
          <Image
            src="/hero.jpeg"
            width="500"
            height="200"
            alt="Hero"
            className="mx-auto aspect-video overflow-clip rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
