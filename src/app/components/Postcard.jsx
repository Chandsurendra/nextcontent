"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import PdfViewer from "./PdfViewer";

function Postcard({ img, imgw, imgh, link, details, title, pdf }) {
  return (
    <>
      <div className="relative mx-auto my-2 max-w-[300px] rounded-2xl text-center shadow-2xl shadow-gray-700 dark:bg-slate-500">
        <div className="bg- overflow-hidden rounded-2xl bg-gray-200">
          <Image
            priority={false}
            src={"https:" + img}
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
              src={"https:" + img}
              width={imgw}
              height={imgh}
              alt=""
            ></Image>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <Link href={link}>
            <CardContent>
              <p>{details}</p>
            </CardContent>
          </Link>
        </Card>
        <PdfViewer fileUrl={"https:" + pdf} />
      </div>
    </>
  );
}

export default Postcard;
