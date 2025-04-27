"use client";

import React from 'react';
import { Button } from "../../components/ui/button.jsx";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";
import Link from "next/link";

import NavBar from "../../components/sections/navbar/navbar.jsx";
import Footer from '../../components/sections/footer/footer.jsx';
import './about.css';

export default function About() {
  return (
    <>
      <NavBar/>
      
      <div className='hero'>
        <div className="container lg:py-32" style={{margin: '0 auto'}}>
          <div className='about'>
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="scroll-m-20 text-4xl text-center text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
                About Gerrymandering<br/><br/>
              </h1>
            </div>
            <div className="mt-5 max-w-3xl text-left mx-auto">
              <p className="text-xl" style={{opacity:0.8}}>
                Gerrymandering is the practice of drawing district
                boundaries to give one political party an advantage over its
                rivals, or that dilutes the voting power of minority groups.
                <br/><br/>It can have blatant forms (below; Houston, TX), but also look
                subtle.
              </p>
              <br/><br/>
              <img src='./texas.png' alt='Image of Texas' />
              <p className="text-xs" style={{opacity:0.8}}>
                Rae, A., (2016). Gerrymandering Is Even More Infuriating When You Can Actually See It, Wired. Available at: Wired.com (Accessed on 26/03/2025)
              </p>
            </div>
            <br/>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className='faq'>
        <div className="mx-auto flex max-w-container flex-col items-center gap-8">
          <h2 className="text-center text-3xl font-semibold sm:text-5xl">
            Frequently Asked Questions<br/>
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                  Why make this website?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                  This website was made to educate the general population on gerrymandering and its impacts, especially in regards to England.
                  <br/><br/>This project focuses on raising awareness to aim for fairer politics across the globe, and so that governments may become deterred from using such methods to manipulate elections.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What are districts/constituencies?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[600px] text-muted-foreground">
                  A district/constituency is a region created by dividing a country/city/etc., that will usually have its own local council.
                  <br/><br/>An example is using dividers to split up a room. Each section would be like a district.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is the purpose of the map?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  The purpose of the map is to provide a visual layout and representation of how gerrymandering works using districts and to show how it can also have impacts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                  But I have never heard about this problem in England/Britain?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                The majority of online resources on gerrymandering are focused on its impact and occurrences in America, due to less restrictions in place and the fact many states are controlled by one party, and are not divided.
                <br/><br/>This can cause people outside of America to feel disconnected with the resources or ignore the present problems with their own country/location.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                  Why should I care?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[600px] text-muted-foreground">
                  When there is confusion or a lack of knowledge, it is far easier for people in positions of power to manipulate situations
                  <br/><br/>Raising awareness can circumvent this by making states/figureheads of power more cautious in employing such methods.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                  What are the BCE?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[600px] text-muted-foreground">
                  This definition is paraphrased from (The Boundary Commission for England, 2023).
                  <br/><br/>The Boundary Commission for England is an organisation that exists to review the boundaries of Parliamentary constituencies, also known as districts, in England.
                  <br/>They are funded by the UK government but do not take input or control from officials or any government members.
                  <br/><br/>You can find more under the Resources section.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p>
                '[An] obvious violation of a basic democratic principle that the party that gets more votes should win the election.'
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Lee Drutman</div>
                  <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-black">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-gray-700">New America, 2022</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <br/><br/><br/><br/>
      <Footer/>
    </>
  );
}
