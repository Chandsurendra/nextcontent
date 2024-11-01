"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function Postcard({ img, imgw, imgh, link, details, title }) {
  return (
    <>
        <Card className='rounded-xl border bg-card text-card-foreground shadow'>
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
        </>
  );
}

export default Postcard;
