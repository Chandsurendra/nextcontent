// import Link from 'next/link';

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from '@/app/components/ui/navigation-menu';
// import client from '../lib/Contentful';
// const homepage = async () => {
//   let responce = await client.getEntries({
//     content_type: 'postcard',
//   });
//   // console.log(responce);
//   const cards = responce.items.map((item, ind) => {
//     return {
//       key: ind,
//       title: item.fields.title,
//       slug: item.fields.slug,
//       unit: item.fields.unit,
//       image: item.fields.image.fields.file.url,
//       imgw: item.fields.image.fields.file.details.image.width,
//       imgh: item.fields.image.fields.file.details.image.height,
//       details: item.fields.title,
//     };
//   });
//   return cards;
// };
// export default async function Navbar() {
//   const Navoption = await homepage();
//   return (
//     <>
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <Link href="/" legacyBehavior passHref>
//               <NavigationMenuLink className={navigationMenuTriggerStyle}>
//                 BESTEDUCATION
//               </NavigationMenuLink>
//             </Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>bbs2ndyear</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                 {Navoption.map((component) => (
//                   <NavigationMenuList
//                     className={
//                       'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
//                     }
//                     key={component.title}
//                     href={component.slug}
//                   >
//                     <div className="cursor-pointer text-sm font-medium leading-none">
//                       {component.title}
//                     </div>
//                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                       {component.details}
//                     </p>
//                   </NavigationMenuList>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                 {/* {components.map((component) => (
//                   <NavigationMenuList
//                     className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                     key={component.title}
//                     href={component.href}
//                   >
//                     <div className="text-sm font-medium leading-none">
//                       {component.title}
//                     </div>
//                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                       {component.description}
//                     </p>
//                   </NavigationMenuList>
//                 ))} */}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <Link href="/docs" legacyBehavior passHref>
//               <NavigationMenuLink className={navigationMenuTriggerStyle}>
//                 Documentation
//               </NavigationMenuLink>
//             </Link>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </>
//   );
// }
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
// import { AiFillCaretDown } from 'react-icons/ai';
import Theme from './Theme';
import { ChevronDown } from 'lucide-react';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <div className="sticky -top-1   z-10 rounded bg-slate-300 text-black  opacity-90 dark:bg-slate-800 dark:text-gray-100">
      <div className=" flex max-w-[1340px]  items-center justify-between">
        <div className="inset-12 text-lg font-extrabold  md:text-3xl">
          <Link className="flex" href="/">
            BEST EDUCATION <br />
          </Link>
          <p className="pl-8 text-sm font-light">
            best education is always best
          </p>
        </div>
        <button
          type="button"
          title="toggle button"
          onClick={() => setToggle(!toggle)}
        >
          <div className="group flex h-14 w-14  cursor-pointer items-center justify-center rounded-3xl  p-2 md:hidden ">
            <div className="space-y-2">
              <span
                className={`block h-1 w-8 origin-center rounded-full bg-slate-500 transition-transform ease-in-out ${
                  !toggle ? '' : 'translate-y-1.5  rotate-45'
                }`}
              />
              <span
                className={`block h-1 origin-center rounded-full bg-orange-500 transition-transform ease-in-out  ${
                  !toggle ? 'w-6' : 'w-8  -translate-y-1.5 -rotate-45'
                } `}
              />
              <span
                className={`block h-1 w-4  rounded-full bg-blue-500  ${
                  !toggle ? '' : 'hidden'
                }   `}
              />
            </div>
          </div>
        </button>

        {/* <div
            onClick={() => setToggle(!toggle)}
            className={` block h-8 duration-300  px-2 text-2xl  w-8 rounded-full rotate-180 leading-9 md:hidden ${!toggle ? "":"rotate-[360deg]"} `}
          >
            {!toggle ? <AiOutlineMenu className="origin-center"/> : <AiOutlineClose className="origin-center"/>}
          </div> */}
        <ol className="hidden gap-10 text-lg  font-bold md:flex  ">
          <li className="   rounded-md px-2 py-1 hover:ring-1">
            <Link href="/">HOME</Link>
          </li>
          <li className="flex">
            <Link href="/bbs2ndyear">BBS 2nd Year</Link>
            <button
              type="button"
              title="list button"
              onClick={() => setDrop(!drop)}
              className={` block h-8  w-8 rounded-full leading-9 duration-200 `}
            >
              <ChevronDown
                className={`text-2xl duration-300  ${
                  !drop ? 'rotate-0' : 'rotate-180'
                }`}
              />
            </button>
            <ul
              className={`absolute top-12  z-10  ml-2 w-auto rounded bg-slate-100 duration-300 dark:bg-gray-500 
               ${drop ? 'scale-100  ' : 'scale-0 '}`}
              onClick={() => setDrop(!drop)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setDrop(!drop);
                }
              }}
              role="menu"
              tabIndex="0"
            >
              <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                <Link href="/bbs2ndyear/cost">
                  COST AND MANAGEMENT ACCOUNTING
                </Link>
              </li>
              <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                <Link href="/bbs2ndyear/macro">MACROECONOMIC FOR BUSINESS</Link>
              </li>
              <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                <Link href="/bbs2ndyear/finance">
                  FUNDAMANTALS OF FINANCIAL MANAGEMENT
                </Link>
              </li>
              <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                <Link href="/bbs2ndyear/business">BUSINESS COMMUNICATION</Link>
              </li>
              <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                <Link href="/bbs2ndyear/business">VISION</Link>
              </li>
              <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                <Link href="/bbs2ndyear/obhrm">
                  ORGANIZATIONAL BEHAVIOUR AND HUMAN RESOURCE MANAGEMENT
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>

          <li>
            <Theme />
          </li>
        </ol>
        {/* mobile */}
        <div
          className={`absolute top-0 z-10 h-screen w-10/12 rounded bg-gray-100 opacity-90 duration-300  dark:bg-slate-500  md:hidden  ${
            toggle ? 'left-0 scale-100' : ' -left-full scale-0 '
          }`}
        >
          <ul className="h-full text-xl font-bold dark:text-slate-50 ">
            <li className="m-2 my-1 rounded-lg border px-5 py-2 text-center hover:bg-blue-400 hover:text-black ">
              <Link href="/" onClick={() => setToggle(!toggle)}>
                HOME
              </Link>
            </li>
            <li className=" text-bold m-2 justify-between rounded-lg border  px-5 py-2 hover:bg-blue-400 hover:text-black ">
              <Link href="/bbs2ndyear">BBS 2nd Year</Link>
              <button
                type="button"
                title="list button"
                onClick={() => setDrop(!drop)}
                className={` float-right block  h-7 w-7 rounded-full leading-9 duration-200  `}
              >
                <ChevronDown
                  className={`text-3xl duration-300  ${
                    !drop ? 'rotate-0' : 'rotate-180'
                  }`}
                />
              </button>

              <ul
                className={` top-[96px]  m-2  w-auto rounded bg-gray-100 duration-500 dark:bg-slate-500 dark:text-slate-50 
                  ${toggle ? 'left-0 ' : '-left-full '} 
                 ${drop ? 'h-auto scale-100 ' : ' h-0  scale-0 '}`}
                onClick={() => setToggle(!toggle)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setDrop(!drop);
                  }
                }}
                role="menu"
                tabIndex="0"
              >
                <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                  <Link href="/bbs2ndyear/cost">
                    COST AND MANAGEMENT ACCOUNTING
                  </Link>
                </li>
                <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                  <Link href="/bbs2ndyear/macro">
                    MACROECONOMIC FOR BUSINESS
                  </Link>
                </li>
                <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                  <Link href="/bbs2ndyear/finance">
                    FUNDAMANTALS OF FINANCIAL MANAGEMENT
                  </Link>
                </li>
                <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                  <Link href="/bbs2ndyear/business">
                    BUSINESS COMMUNICATION
                  </Link>
                </li>
                <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black active:text-red-600 ">
                  <Link href="/bbs2ndyear/business">VISION</Link>
                </li>
                <li className="m-1 rounded-md border border-gray-900 p-1 hover:bg-blue-400 hover:text-black ">
                  <Link href="/bbs2ndyear/obhrm">
                    ORGANIZATIONAL BEHAVIOUR AND HUMAN RESOURCE MANAGEMENT
                  </Link>
                </li>
              </ul>
            </li>
            <li className="m-2 my-1 rounded-lg border px-5 py-2 text-center  hover:bg-blue-400 hover:text-black">
              <Link onClick={() => setToggle(!toggle)} href="/about">
                ABOUT
              </Link>
            </li>

            <li className="p-6">Theme</li>
            <li>
              {' '}
              <Theme />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
