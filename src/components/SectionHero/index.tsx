'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GridContainer } from "../Grid";

import gsap from "gsap";
import FileIcon from '/public/icon-file.svg';
import HandIcon02 from '/public/icon-hand-02.svg';
import HandIcon from '/public/icon-hand.svg';
import MockupIcon from '/public/mockup.svg';

export function SectionHero() {
    const textHeroRef = useRef<HTMLDivElement>(null);
    const mockupLeftRef = useRef<HTMLImageElement>(null);
    const mockupRightRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      const textHero = textHeroRef.current;
      const mLeft = mockupLeftRef.current;
      const mRight = mockupRightRef.current;

      gsap.fromTo(textHero, { 
          opacity: 0, 
          y: 50 
        }, { 
          opacity: 1, 
          y: 0, 
          duration: .4,
          ease: 'power4.out' 
        }
      );

      gsap.fromTo(mLeft, { 
          rotate: 0, 
        }, { 
          rotate: -10,
          duration: 1,
        }
      );

      gsap.fromTo(mRight, { 
          rotate: 0, 
        }, { 
          rotate: 10, 
          duration: 1,
        }
      );
    }, []);

  return (
    <section 
      className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top
    bg-green-primary border-t border-t-green-border pt-16 overflow-hidden"
    >
     <GridContainer className="flex flex-col items-center">
      <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
        <h3 className="text-xl font-medium text-green-activated mb-4">
          New course focused on Instagram
        </h3>
        <h1 className="text-white text-7xl/normal font-semibold mb-2">Unlock your skills</h1>
        <div className="flex items-center justify-center gap-10">
          <button className="flex items-center gap-2">
            <Image 
              src={FileIcon} 
              alt="File Icon"
            />
            <span className="text-white font-medium">Sign waiting list</span>
          </button>
          <button 
            className="py-4 px-5 bg-green-btn rounded-full
          text-green-primary font-bold"
          >
            Start now
          </button>
        </div>
      </div>
      <div className="relative w-full max-w-area-icons h-28 mt-4">
        <Image 
          src={HandIcon} 
          alt="Hand Icon"
          className="absolute bottom-0 left-0"
        />
        <Image 
          src={HandIcon02} 
          alt="Hand Icon"
          className="absolute top-0 right-0"
        />
      </div>
      <div 
        className="absolute -bottom-44 w-full max-w-area-mockups
        flex justify-between"
      >
        <Image 
          src={MockupIcon}
          alt="Mockup Smartphone"
          className="relative top-[1.1rem] left-[3.3rem]"
          ref={mockupLeftRef}
        />
        <Image 
          src={MockupIcon}
          alt="Mockup Smartphone"
          className="relative top-[1.1rem] right-[3.3rem]"
          ref={mockupRightRef}
        />
      </div>
     </GridContainer>
    </section>
  )
}