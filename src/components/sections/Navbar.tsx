"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            className="rounded-full"
            src="/vigilant_logo.jpeg"
            alt="Vigilant Secret Logo"
            width={50}
            height={50}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors"
              scroll={true}
            >
              {link.name}
            </Link>
          ))}
            <Link href="#contacts" scroll={true}>
              <Button variant="outline" className="border-primary rounded-3xl text-[#fff] hover:bg-primary hover:text-[#fff]">
                Contact Us
              </Button>
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="#contacts" scroll={true}>
                <Button className="w-full">Get a Quote</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
