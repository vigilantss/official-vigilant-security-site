"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  UserCheck, 
  Activity, 
  FileCheck, 
  Heart, 
  Camera, 
  Users, 
  Car, 
  Lock, 
  HardHat, 
  ChevronRight,
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2,
  CheckCheck,
  Quote,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

//Sections import
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Footer } from "@/components/sections/Footer";



const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const primaryServices = [
  {
    title: "Static Guarding",
    desc: "Uniformed guards at fixed posts for offices, warehouses, residential complexes, and shopping centres.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    icon: Shield
  },
  {
    title: "Mobile Patrols",
    desc: "Marked security vehicles performing scheduled and random surveillance.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    icon: Car
  },
  {
    title: "Access Control",
    desc: "Managed entry and exit points to prevent unauthorised access.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    icon: Lock
  },
  {
    title: "Event Security",
    desc: "Professional coverage for corporate events, private functions, concerts, and public gatherings.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    icon: Users
  }
];

const advancedServices = [
  {
    title: "VIP & Executive Protection",
    desc: "Discreet, professional bodyguard services for high-profile individuals.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800",
    icon: UserCheck
  },
  {
    title: "Construction Site Security",
    desc: "Guarding equipment, tools, and workers in high-risk or unmonitored areas.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    icon: HardHat
  },
  {
    title: "CCTV Monitoring",
    desc: "Real-time surveillance through advanced systems operated by trained personnel.",
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85aae?auto=format&fit=crop&q=80&w=800",
    icon: Camera
  },
  {
    title: "Risk Assessment",
    desc: "Comprehensive analysis of security vulnerabilities and tailored mitigation strategies.",
    image: "https://images.unsplash.com/photo-1454165833767-02294199ec1E?auto=format&fit=crop&q=80&w=800",
    icon: FileCheck
  }
];

export default function Home() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [ctaState, setCtaState] = useState<'idle' | 'form' | 'success' | 'error'>('idle');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setCtaState('success');
  //   setTimeout(() => {
  //     setCtaState('idle');
  //   }, 5000);
  // };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget; // the form element

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setCtaState("success"); // show success message
      form.reset();           // clear form
      setTimeout(() => setCtaState("idle"), 5000);
    })
    .catch((error: any) => {
      console.error("EmailJS error:", error);
      setCtaState("error");   // show error message
    });
};

  return (
    <div className="relative min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Values/>
      <Services/>
      {/* 5. Why Choose Vigilant Secret Services */}
      <section id="why-us" className="py-24 bg-zinc-50 text-zinc-950">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">
                Why Choose Us
              </h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Your security, our commitment – 
              <br/> 
              here’s what sets us apart.</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-[4/3] w-full"
            >
              <Image 
                src="/team_image1.png" 
                alt="Professional Security Team" 
                fill 
                className="object-cover rounded-[2rem] shadow-2xl shadow-zinc-200" 
              />
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-zinc-800">Our Key Features</h3>
              <div className="space-y-4">
                {[
                  "Licensed and insured security professionals.",
                  "Rigorous staff vetting and background checks.",
                  "24/7 customer support and response teams.",
                  "Tailored security plans and expert risk assessments.",
                  "Competitive pricing without compromising on quality."
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-zinc-100 transition-all hover:shadow-md group cursor-arrow-pointer">
                    <div className="bg-white p-1.5">
                      <CheckCheck className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-regular text-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Track Record Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
        {/* Decorative Graphics */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b49af 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Track Record</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Trusted by Leading Businesses and Individuals.</h3>
            </motion.div>
            <motion.div {...fadeInUp} className="hidden md:block">
              <p className="text-zinc-500 text-lg max-w-sm text-right">
                Delivering consistent, high-quality security solutions across Gauteng.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "BOY NO 50 TRADING (PTY) LTD",
                services: ["Access Control", "CCTV Control", "Escorting", "Gate Guarding", "Yard Patrol"]
              },
              {
                name: "SITFUPHA TRADING (PTY) LTD",
                services: ["Access Control", "CCTV Control", "Escorting", "Gate Guarding", "Yard Patrol"]
              },
              {
                name: "NYASHA MATONDO",
                location: "Bedfordview",
                services: ["Access Control", "CCTV Control", "Gate Guarding", "Yard Patrol"]
              }
            ].map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-10 rounded-[2.5rem] h-full flex flex-col transition-all duration-500 hover:border-primary/30 hover:bg-zinc-900/80">
                  <div className="mb-8">
                    <div className="bg-zinc-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold text-white leading-snug group-hover:text-primary transition-colors">{client.name}</h4>
                    {client.location && (
                      <p className="text-primary/60 text-sm font-bold uppercase tracking-widest mt-2">{client.location}</p>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-zinc-800">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Deployed Services</p>
                    <ul className="space-y-3">
                      {client.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-3 text-zinc-400">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm font-medium">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">FAQ</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Common Questions About Our Protection.</h3>
              <div className="aspect-video relative rounded-3xl overflow-hidden grayscale group cursor-pointer">
                <Image src="/image4.png" alt="Security Guard" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="text-white font-medium">Providing local security expertise in Pretoria and surrounding Gauteng areas.</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col justify-center">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "How quickly can security services be deployed?", a: "We pride ourselves on our rapid response. Depending on your location and requirements, we can often deploy personnel within 24-48 hours of a confirmed assessment." },
                  { q: "Are your security guards fully trained and licensed?", a: "Yes, all our guards are PSIRA registered and undergo continuous professional development and rigorous background checks." },
                  { q: "Do you provide custom security plans?", a: "Absolutely. We start every engagement with a thorough risk assessment to design a protection strategy tailored specifically to your needs." },
                  { q: "What areas do you cover?", a: "We primarily serve Pretoria and the surrounding Gauteng areas, providing localized expertise and rapid support." },
                  { q: "How do you ensure accountability?", a: "We use advanced tracking and reporting systems to provide real-time updates and ensure all duties are performed to the highest standard." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-zinc-800 bg-zinc-900/30 px-6 rounded-2xl">
                    <AccordionTrigger className="text-white hover:text-primary transition-colors text-left font-bold text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-500 leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacts" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950/10" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <AnimatePresence mode="wait">
            {ctaState === 'idle' && (
              <motion.div 
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left"
              >
                <div>
                  <h3 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 tracking-tighter">Secure Your Assets Today.</h3>
                  <p className="text-primary-foreground/70 text-xl max-w-xl">Request a free initial security consultation and get a tailored risk assessment for your property.</p>
                </div>
                <Button 
                  onClick={() => setCtaState('form')}
                  size="lg" 
                  variant="secondary" 
                  className="h-16 px-12 text-xl rounded-full bg-zinc-950 text-white hover:bg-zinc-800 border-none shadow-2xl"
                >
                  Get Started Now
                </Button>
              </motion.div>
            )}

            {ctaState === 'form' && (
              <motion.div 
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]"
              >
                {/* Left Side (Image) - Inspired by reference image */}
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-zinc-900">
                   <Image 
                      src="/image3.png" 
                      alt="Contact Background" 
                      fill 
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-zinc-900/70" />
                    {/* For Desktop Devices */}
                    <div className="absolute bottom-12 left-12 right-12 text-white hidden lg:block">
                      <h4 className="text-5xl font-bold mb-6 tracking-tight">We're ready</h4>
                      <p className="text-xl opacity-90 leading-relaxed max-w-sm">
                        Ready to dig into your project, clarify the requirements, and get the security process underway.
                      </p>
                    </div>
                    {/* For Mobile Devices */}
                    <div className="absolute bottom-12 left-12 right-12 text-white md:hidden lg:hidden">
                      <h4 className="text-4xl font-bold mb-6 tracking-tight">We're ready</h4>
                      <p className="text-[16px] opacity-90 leading-relaxed max-w-sm">
                        Ready to dig into your project, clarify the requirements, and get the security process underway.
                      </p>
                    </div>
                </div>

                {/* Right Side (Form) - Inspired by reference image */}
                <div className="lg:w-1/2 p-8 md:p-16 bg-white flex flex-col justify-center">
                  <div className="mb-10">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-4 block">Contact Vigilant</span>
                    <h4 className="text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight">Get in touch</h4>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="text-zinc-950 font-bold text-sm">First name*</Label>
                        <Input placeholder="First name" name="first_name" className="h-14 border-zinc-200 text-black bg-zinc-50 focus:bg-white focus:ring-zinc-900 rounded-xl" required />
                      </div>
                      <div className="space-y-3">
                        <Label className="text-zinc-950 font-bold text-sm">Last name*</Label>
                        <Input placeholder="Last name" name="last_name" className="h-14 border-zinc-200 bg-zinc-50 text-black focus:bg-white focus:ring-zinc-900 rounded-xl" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="text-zinc-950 font-bold text-sm">Email address*</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                          <Input type="email" name="email" placeholder="example@gmail.com" className="h-14 pl-12 text-black border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-zinc-900 rounded-xl" required />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label className="text-zinc-950 font-bold text-sm">Phone number*</Label>
                        <div className="flex gap-2">
                          <div className="w-24 h-14 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-100 transition-colors">
                            <span className="font-bold text-zinc-900">ZA</span>
                            <ChevronDown className="w-4 h-4 text-zinc-400" />
                          </div>
                          <Input placeholder="Phone number" name="phone_number" className="h-14 flex-1 text-black border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-zinc-900 rounded-xl" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-zinc-950 font-bold text-sm">Your Message</Label>
                      <Textarea placeholder="Input Message" name ="message"className="min-h-[140px] border-zinc-200 bg-zinc-50 focus:bg-white text-black focus:ring-zinc-900 rounded-xl resize-none p-4" />
                    </div>

                    <Button type="submit" className="w-full h-16 bg-primary hover:bg-primary-dark text-white font-bold text-sm uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-green-900/20 transition-all active:scale-[0.98]">
                      Submit Now
                    </Button>
                  </form>
                </div>
              </motion.div>
            )}

            {ctaState === 'success' && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-zinc-950 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-5xl font-bold text-primary-foreground mb-6 tracking-tight">Request Received!</h4>
                <p className="text-primary-foreground/70 text-xl mb-12 max-w-md">Our security experts have received your inquiry and will contact you within 24 hours.</p>
                <Button 
                  onClick={() => setCtaState('idle')}
                  variant="secondary" 
                  className="rounded-full px-10 h-14 font-bold bg-zinc-950 text-white hover:bg-zinc-800"
                >
                  Back to Home
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 8. Footer Section (Enhanced Design) */}
      <Footer/>
    </div>
  );
}

// Icons needed but not imported



