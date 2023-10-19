import Image from "next/image";
import { GridContainer } from "../Grid";

import FileIcon from '/public/icon-file.svg';

export function SectionHero() {
  return (
    <section className="w-full h-section-hero bg-green-primary">
     <GridContainer>
      <div>
        <h3>New course focused on Instagram</h3>
        <h1>Unlock your skills</h1>
        <div>
          <button>
            <Image 
              src={FileIcon} 
              alt="File Icon"
            />
          sign waiting list
          </button>
          <button>Start now</button>
        </div>
      </div>
     </GridContainer>
    </section>
  )
}