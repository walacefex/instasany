import Image from "next/image";
import Card01 from '/public/image-01.png';
import Card02 from '/public/image-02.png';
import Card03 from '/public/image-03.png';
import Card04 from '/public/image-04.png';
import Card05 from '/public/image-05.png';
import Card06 from '/public/image-06.png';
import MockupMain from '/public/mockup-main.png';

export function SectionCards() {
  return (
  <>
    <section className="w-full pb-20">
     <Image 
        src={MockupMain} 
        alt="Image smartphone with an image girl"
        className="sticky top-56 z-10 mx-auto -mt-[32rem] mb-16"
      />
      <h2 className="text-center text-7xl font-semibold text-black mb-56">
        Do it <span className="text-green-title-cards">yourself</span> from home
      </h2>

      <div className="relative w-full max-w-area-cards h-area-cards mx-auto">
        <Image src={Card01} className="absolute top-8 left-44" alt="Image card 01" />
        <Image src={Card02} className="absolute left-0 bottom-32" alt="Image card 02" />
        <Image src={Card03} className="absolute bottom-0 left-80" alt="Image card 03" />
        <Image src={Card04} className="absolute top-0 right-32" alt="Image card 04" />
        <Image src={Card05} className="absolute right-0 bottom-28" alt="Image card 05" />
        <Image src={Card06} className="absolute bottom-0 right-80" alt="Image card 06" />
      </div>
    </section>
  </>
  )
}