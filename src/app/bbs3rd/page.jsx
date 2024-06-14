import React from "react";
import client from "../lib/Contentful";
import Postcard from "../components/Postcard";

const page = async () => {
  const home = await homepage();
  console.log(home[0]);
  return (
    <div>
      {home.map((card, ind) => {
        return (
          <Postcard
            key={ind}
            title={card.title}
            img={card.image}
            imgw={card.imgw}
            imgh={card.imgh}
            link={card.slug}
            details={card.details}
            pdf={card.pdf}
          />
        );
      })}
    </div>
  );
};

export default page;
const homepage = async () => {
  let responce = await client.getEntries({
    content_type: "postcard",
  });
  // console.log(responce);
  const cards = responce.items.map((item, ind) => {
    return {
      key: ind,
      title: item.fields.title,
      slug: item.fields.slug,
      unit: item.fields.unit,
      image: item.fields.image.fields.file.url,
      imgw: item.fields.image.fields.file.details.image.width,
      imgh: item.fields.image.fields.file.details.image.height,
      details: item.fields.unit,
      pdf: item.fields.pdf.fields.file.url,
    };
  });
  return cards;
};
