import Image from "next/image";
import Link from "next/link";
import { GridContainer } from "../Grid";
import SearchIcon from '/public/icon-search.svg';
import IconUser from '/public/icon-user.svg';
import LogoImg from '/public/logo.svg';

export function Header() {
const activatedStyle = "bg-green-activated text-opacity-100 rounded-full"
const arrayMenu = [
  'Home',
  'Benefits',
  'Who is the course for?',
  'Promotional Pricing',
  'About us'
]

  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image
          src={LogoImg}
          alt="Instasany"
        />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            { arrayMenu.map((item, index) => (
              <Link key={index} href="/" 
                className={`
                  px-3 py-1 text-white text-opacity-40 
                  hover:text-opacity-100 transition-all
                  ${index === 0 ? activatedStyle : ''}`
                }>
                {item}
              </Link>
            ))
          }
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image 
                src={SearchIcon}
                alt="Search Icon"
              />
            </button>
            <button className="flex items-center gap-2">
              <Image
                src={IconUser}
                alt="User Icon"
              />
              <span className="text-white font-medium">Sign In</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  )
} 