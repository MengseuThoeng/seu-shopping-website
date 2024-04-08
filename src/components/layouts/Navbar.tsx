"use client";

import { Button, Navbar } from "flowbite-react";
import Link from 'next/link'; // Import Link from next/link

export default function NavbarComponent() {
  return (
   <header className="sticky top-0 z-50">
     <section className="w-[100%] mx-auto  shadow-ss1 flex justify-center">
      <Navbar fluid rounded className=" w-[100%] ">
        <Navbar.Brand href="page.tsx" className="py-2">  
          <img
            src="/logo3.png"
            className="mr-3 h-6 sm:h-9"
            alt="STAD Ecommcerce"
          />
          <span className="self-center whitespace-nowrap text-[22px] font-bold text-violet-600">
            SEU <span className="text-violet-600 ml-1">SHOPPING</span>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link href="/dashboard">
          <Button className="bg-violet-600 ">Dashboard</Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" className="text-[18px] hover:text-violet-800">
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/about-us"
            className="text-[18px] text-gray-800 hover:text-violet-600"
          >
            About Us
          </Navbar.Link>
          <Navbar.Link
            href="/policy"
            className="text-[18px] text-gray-800 hover:text-violet-600"
          >
            Policy
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </section>
   </header>
  );
}
