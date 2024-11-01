"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"

const menuItems = [
  { title: "Home", href: "/" },
  {
    title: "2ndyear",
    href: "/bbs2nd",
    submenu: [
      { title: "Product 1", href: "/bbs2nd" },
      { title: "Product 2", href: "/products/product-2" },
      { title: "Product 3", href: "/products/product-3" },
    ],
  },
  {
    title: "Bbs3rdyear",
    href: "/bbs3rd",
    submenu: [
      { title: "Service 1", href: "/bbs3rd" },
      { title: "Service 2", href: "/services/service-2" },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav className=" bg-backgrond backdrop-blur shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                Logo
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {menuItems.map((item) => (
                <div key={item.title} className="relative">
                  {item.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={`px-3 py-2 rounded-md text-sm font-medium ${
                            isActive(item.href)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {item.title}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.submenu.map((subItem) => (
                          <DropdownMenuItem key={subItem.title} asChild>
                            <Link
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm ${
                                isActive(subItem.href)
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              }`}
                            >
                              {subItem.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        isActive(item.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden backdrop-blur opacity-80">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:hidden ">
                <nav className="mt-5">
                  {menuItems.map((item) => (
                    <div key={item.title} className="px-2 pt-2 pb-3 space-y-1">
                      {item.submenu ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className={`w-full justify-start ${
                                isActive(item.href)
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {item.title}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {item.submenu.map((subItem) => (
                              <DropdownMenuItem key={subItem.title} asChild>
                                <Link
                                  href={subItem.href}
                                  className={`block px-4 py-2 text-sm ${
                                    isActive(subItem.href)
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            isActive(item.href)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}