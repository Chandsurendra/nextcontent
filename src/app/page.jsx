import ThemeSwitcher from "./components/Theme";
import client from "./lib/Contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const homepage = async () => {
  let home = await client.getEntries({ content_type: "homepage" });
  return home;
};
export default async function Home() {
  const home = await homepage();
  // console.log(home.items[0].fields);
  return (
    <>
      <ThemeSwitcher />
      <div>{documentToReactComponents(home.items[0].fields.section)}</div>
    </>
  );
}
