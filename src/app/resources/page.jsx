"use client"

import NavBar from '../../components/sections/navbar/navbar.jsx';
import Footer from '../../components/sections/footer/footer.jsx';
import './resources.css';

export default function Resources() {
  return (
    <>
      <NavBar/>

      <div className="max-w-container mx-auto items-center gap-6 sm:gap-20 bg-gray-200">
        <br/><br/><br/>
        <h2 className="max-w-container text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          Resources
        </h2>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-4xl lg:px-8">
          <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:grid-cols-1 size-sm">
            <a href='https://boundarycommissionforengland.independent.gov.uk/' target='_blank'>
              <div className="relative lg:row-span-2 text-gray-50">
                <div className="absolute inset-px rounded-lg bg-black/85 lg:rounded-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-[calc(2rem+1px)] duration-200 hover:bg-[#21c6eb]/30">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-2xl font-medium text-center">
                      Boundary Commission for England
                    </p>
                    <br/>
                    <p className="mt-2 w-md text-lg max-lg:text-center">
                      The Boundary Commission for England exists to review the boundaries of Parliamentary constituencies, also known as districts, in England.
                    </p>
                    <br/><br/>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-[2rem]"></div>
              </div>
            </a>
            <a href='https://commonslibrary.parliament.uk/constituency-dashboard/' target='_blank'>
              <div className="relative lg:row-span-2 text-gray-50">
                <div className="absolute inset-px rounded-lg bg-black/85 lg:rounded-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-[calc(2rem+1px)] duration-200 hover:bg-[#21c6eb]/30">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-2xl font-medium text-center">
                      Headline statistics for your constituency
                    </p>
                    <br/>
                    <p className="mt-2 w-md text-lg max-lg:text-center">
                      Use this interactive dashboard to explore data for parliamentary constituencies, covering topics such as demographics, unemployment, and child poverty.
                    </p>
                    <br/><br/>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-[2rem]"></div>
              </div>
            </a>
            <a href='https://www.nytimes.com/interactive/2022/01/27/us/politics/congressional-gerrymandering-redistricting-game-2022.html' target='_blank'>
              <div className="relative lg:row-span-2 text-gray-50">
                <div className="absolute inset-px rounded-lg bg-black/85 lg:rounded-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-[calc(2rem+1px)] duration-200 hover:bg-[#21c6eb]/30">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-2xl font-medium text-center">
                      NY Times: Can You Gerrymander Your Party to Power?
                    </p>
                    <br/>
                    <p className="mt-2 w-md text-lg max-lg:text-center">
                      The NY Times have created an imaginary state called Hexapolis, where your only mission is to gerrymander your party to power.
                    </p>
                    <br/><br/>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-[2rem]"></div>
              </div>
            </a>
            <a href='http://gametheorytest.com/gerry/game/' target='_blank'>
              <div className="relative lg:row-span-2 text-gray-50">
                <div className="absolute inset-px rounded-lg bg-black/85 lg:rounded-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-[calc(2rem+1px)] duration-200 hover:bg-[#21c6eb]/30">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-2xl font-medium text-center">
                        Gerrymander - A voting district game by GameTheory
                      </p>
                      <br/>
                      <p className="mt-2 w-md text-lg max-lg:text-center">
                        A simple puzzle game designed to show how gerrymandering can be used to rig an election.
                      </p>
                    <br/><br/>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-[2rem]"></div>
              </div>
            </a>
            <a href='https://www.gov.uk/government/collections/english-indices-of-deprivation' target='_blank'>
              <div className="relative lg:row-span-2 text-gray-50">
                <div className="absolute inset-px rounded-lg bg-black/85 lg:rounded-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-[calc(2rem+1px)] duration-200 hover:bg-[#21c6eb]/30">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-2xl font-medium text-center">
                        The English Indicies of Deprivation
                      </p>
                      <br/>
                      <p className="mt-2 w-md text-lg max-lg:text-center">
                        This collection brings together all data and documents relating to the English indices of deprivation.
                      </p>
                    <br/><br/>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-[2rem]"></div>
              </div>
            </a>
          </div>
        </div>
        <br/><br/><br/><br/><br/>
      </div>

      <Footer/>
    </>
  );
}
