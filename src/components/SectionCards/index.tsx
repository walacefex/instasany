'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Card01 from '/public/image-01.png';
import Card02 from '/public/image-02.png';
import Card03 from '/public/image-03.png';
import Card04 from '/public/image-04.png';
import Card05 from '/public/image-05.png';
import Card06 from '/public/image-06.png';
import MockupMain from '/public/mockup-main.png';

gsap.registerPlugin(ScrollTrigger);

export function SectionCards() {
  const mockupRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);
  const section = sectionRef.current;

  useEffect(() => {
    function animateCards(images: HTMLImageElement[] | null[], position:number) {
      gsap.fromTo(images, {
        opacity: 0,
        x: position,
      }, {
        opacity: 1,
        x: position,
        duration: 0.5,
        stagger: 0.4,
        scrollTrigger: {
          trigger: section,
          start: 'center center',     
        },
      });
    }

    const mockupPhone = mockupRef.current;
    const title = titleRef.current;
   
    gsap.fromTo(mockupPhone, {
      opacity: 0,
      scale: .5,
    },{
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power5.out',
    })
    gsap.fromTo(title, {
      opacity: 0,
      y: 100,
    },{
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: '65% center',
      },
    })

    const card01 = card01Ref.current;
    const card02 = card02Ref.current;
    const card03 = card03Ref.current;
    const card04 = card04Ref.current;
    const card05 = card05Ref.current;
    const card06 = card06Ref.current;

    const leftImages = [card01, card02, card03];
    const rightImages = [card04, card05, card06];
    animateCards(leftImages, 50)
    animateCards(rightImages, -50)

  }, [section]);

  return (
  <>
    <section className="w-full pb-20" ref={sectionRef}>
     <Image 
        src={MockupMain} 
        alt="Image smartphone with an image girl"
        className="sticky top-56 z-10 mx-auto -mt-[32rem] mb-16 opacity-0"
        ref={mockupRef}
      />
      <h2 
        className="text-center text-7xl font-semibold text-black mb-56 opacity-0"
        ref={titleRef}
      >
        Do it <span className="text-green-title-cards">yourself</span> from home
      </h2>

      <div className="relative w-full max-w-area-cards h-area-cards mx-auto">
        <Image src={Card01} ref={card01Ref} className="absolute opacity-0 top-8 left-44" alt="Image card 01" />
        <Image src={Card02} ref={card02Ref} className="absolute opacity-0 left-0 bottom-32" alt="Image card 02" />
        <Image src={Card03} ref={card03Ref} className="absolute opacity-0 bottom-0 left-80" alt="Image card 03" />
        <Image src={Card04} ref={card04Ref} className="absolute opacity-0 top-0 right-32" alt="Image card 04" />
        <Image src={Card05} ref={card05Ref} className="absolute opacity-0 right-0 bottom-28" alt="Image card 05" />
        <Image src={Card06} ref={card06Ref} className="absolute opacity-0 bottom-0 right-80" alt="Image card 06" />
      </div>
    </section>
  </>
  )
  }