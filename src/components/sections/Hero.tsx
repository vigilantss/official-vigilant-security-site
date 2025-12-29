"use client";
import React from 'react'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, 
  Phone, 
} from "lucide-react";
import { Button } from "@/components/ui/button";


export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1678264239693-2425d15e6f35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Security Professional"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l md:bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="hidden items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 md:inline-flex">
              <Shield className="w-4 h-4" />
              <span className='text-white'>Your Trusted Partner in Safety</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tighter">
              Vigilant Secret Services: <br />
              <span className="text-primary">Professional Protection</span> <br />
              You Can Trust.
            </h1>
            <p className="text-sm lg:text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed mb-13">
              Vigilant Eyes, Secure Lives. We provide exceptional protection and peace of mind through custom security solutions tailored to your unique needs.
            </p>

            {/* For Mobile Devices */}
              <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                <Link href="#contacts" scroll={true} className="inline-flex w-full">
                  <Button size="lg" className="h-12 px-6 text-sm sm:h-13 sm:px-7 sm:text-base lg:h-14 lg:px-8 lg:text-base text-white rounded-[0.50rem] shadow-lg shadow-primary/20 w-full">
                    Get a Custom Quote
                  </Button>
                </Link>
                <Link href="tel:0817295201" className="inline-flex w-full">
                  <Button size="lg" variant="outline" className="h-12 px-6 text-sm sm:h-13 sm:px-7 sm:text-base lg:h-14 lg:px-8 lg:text-base rounded-[0.50rem] border-zinc-700 hover:bg-white w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 081 729 5201
                  </Button>
                </Link>
              </div>

            {/* For Desktop Devices */}
              <div className="flex flex-col sm:flex-row gap-4 hidden lg:flex">
                <Link href="#contacts" scroll={true}>
                  <Button size="lg" className="h-12 px-6 text-sm sm:h-13 sm:px-7 sm:text-base lg:h-14 lg:px-8 lg:text-base text-white rounded-[0.50rem] shadow-lg shadow-primary/20">
                    Get a Custom Quote
                  </Button>
                </Link>
                <Link href="tel:0817295201">
                  <Button size="lg" variant="outline" className="h-12 px-6 text-sm sm:h-13 sm:px-7 sm:text-base lg:h-14 lg:px-8 lg:text-base rounded-[0.50rem] border-zinc-700 hover:bg-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 081 729 5201
                  </Button>
                </Link>
              </div>
          </motion.div>
        </div>

        {/* Hero Bottom Elements */}
        <div className="absolute bottom-10 left-0 w-full lg:block">
          <div className="container mx-auto px-6">
            <div className="flex gap-12 border-t border-zinc-800 pt-8 text-zinc-500">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl tracking-tighter">100%</span>
                <span className="text-xs uppercase tracking-widest">Licensed & Insured</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl tracking-tighter">24/7</span>
                <span className="text-xs uppercase tracking-widest">Customer Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl tracking-tighter">Expert</span>
                <span className="text-xs uppercase tracking-widest">Risk Assessments</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
