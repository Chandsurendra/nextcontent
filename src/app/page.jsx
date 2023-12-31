import Image from 'next/image';
import client from './lib/Contentful';
import Link from 'next/link';
import Postcard from './components/Postcard';
import Navbar from './components/Navbar';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const homepage = async () => {
  let responce = await client.getEntries({
    content_type: 'postcard',
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
      details: item.fields.title,
    };
  });
  return cards;
};
export default async function Home() {
  const cards = await homepage();
  // console.log(cards);

  return (
    <div>
      {/* {cards.map((dd, ind) => {
        return (
          <>
            <Navbar key={ind} opt={dd.title} />
          </>
        );
      })} */}
      <Navbar />
      <div className="container">
        {cards.map((card, ind) => {
          return (
            <Postcard
              key={ind}
              title={card.title}
              img={card.image}
              imgw={card.imgw}
              imgh={card.imgh}
              link={card.slug}
              details={card.details}
            />
          );
        })}
      </div>
    </div>
  );
}
