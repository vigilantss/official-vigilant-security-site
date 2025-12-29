import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter
} from "lucide-react";


export const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Top Newsletter Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-24">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Let's Secure Your Peace of Mind.</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                Together, we'll design and implement a security plan that perfectly matches your safety requirements, assets, and lifestyle. From assessment to deployment, we're here to protect what matters most.
              </p>
            </div>
            {/* <div className="w-full lg:w-auto">
              <div className="bg-white rounded-full p-2 flex items-center max-w-md w-full">
                <input 
                  type="email" 
                  placeholder="Enter your Email" 
                  className="flex-1 bg-transparent border-none px-6 py-2 text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                />
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-black font-bold px-8 py-6 h-auto">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-t border-zinc-900 pt-20">
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-2 group">
                <Image
                  className="rounded-full"
                  src="/vigilant_logo.jpeg"
                  alt="Vigilant Secret Logo"
                  width={50}
                  height={50}
                />
                <span className="text-xl font-bold tracking-tighter text-white uppercase">
                  Vigilant<span className="text-primary">Secret</span>
                </span>
              </Link>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                Professional protection and peace of mind through custom security solutions tailored to your unique needs.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:opacity-90 transition-all">
                  <Facebook className="w-5 h-5 fill-current" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:opacity-90 transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:opacity-90 transition-all">
                  <Linkedin className="w-5 h-5 fill-current" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:opacity-90 transition-all">
                  <Twitter className="w-5 h-5 fill-current" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-xl tracking-tight">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Service", href: "#services" },
                  { name: "Why Us", href: "#why-us" },
                  { name: "Contact", href: "#contacts" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-xl tracking-tight">Utility Pages</h4>
              <ul className="space-y-4">
                {[
                  { name: "Property Protection", href: "#services" },
                  { name: "Our Mission", href: "#about" },
                  { name: "Our Vision", href: "#about" },
                  { name: "Our History", href: "#about" },
                  { name: "FAQ", href: "#faq" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-xl tracking-tight">Contact</h4>
              <ul className="space-y-6">
                <li className="text-zinc-400 max-w-[200px] leading-relaxed">
                  2385, 19 Brazil Street, Lotus Gardens, Pretoria, 0008.
                </li>
                <li>
                  <Link href="mailto:vigilantsecretservices@gmail.com" className="text-zinc-400 hover:text-white transition-colors block">
                    vigilantsecretservices@gmail.com
                  </Link>
                </li>
                <li className="text-zinc-400">
                  081 729 5201
                </li>
                <li className="text-zinc-400">
                  <span className='text-primary'>REG NO:</span> 2025/277287/07
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Vigilant Secret Services. All Rights Reserved.</p>
            <div className="flex gap-8 text-sm text-zinc-600">
              <Link href="#" className="hover:text-zinc-400">Term of service</Link>
              <Link href="#" className="hover:text-zinc-400">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
