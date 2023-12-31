import React from 'react';

const navopt = async () => {
  let responce = await client.getEntries({
    content_type: 'postcard',
  });
  console.log(responce);
  const cards = responce.items.map((item, ind) => {
    return {
      key: ind,
      title: item.fields.title,
      href: item.fields.title,
    };
  });
  return cards;
};
const Navoption = async ({ title }) => {
  const cards = await navopt();
  return (
    <>
      {cards.map((card) => {
        return (
          <>
            <div title={card.title} />
          </>
        );
      })}
    </>
  );
};

export default Navoption;
