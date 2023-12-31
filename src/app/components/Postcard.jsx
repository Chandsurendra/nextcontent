'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { HoverCard } from './ui/hover-card';

function Postcard({ img, imgw, imgh, link, details, title }) {
  return (
    <>
      <div className="relative mx-auto my-2 max-w-[300px] rounded-2xl text-center shadow-2xl shadow-gray-700 dark:bg-slate-500">
        <div className="bg- overflow-hidden rounded-2xl bg-gray-200">
          <Image
            priority={false}
            src={'https:' + img}
            width={imgw}
            height={imgh}
            alt=""
          ></Image>
        </div>
        <Link href={link}>
          <div className=" m-auto h-24 rounded-2xl  bg-gray-300 hover:bg-blue-300 dark:bg-slate-600 ">
            <h5 className=" rounded-2xl px-3 py-1 text-xl font-bold ">
              {title}
            </h5>
            <p className="px-3 py-1 ">{details}</p>
          </div>
        </Link>

        <Card>
          <CardHeader>
            <Image
              loading="lazy"
              priority={false}
              src={'https:' + img}
              width={imgw}
              height={imgh}
              alt=""
            ></Image>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Postcard;
