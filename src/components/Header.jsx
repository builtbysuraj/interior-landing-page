import { useState } from 'react'
import { Link } from 'react-scroll'
import { NAV_LINKS } from '../constants'
import { Image } from '../utils/images'
import ContactForm from './ContactForm'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from './ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from './ui/drawer'

function NavLinks({ handleDrawerClose }) {
  return (
    <ul className='hidden md:flex items-center gap-3'>
      {NAV_LINKS.map((item) => (
        <Link
          to={item.url.substring(1)} // Remove leading '#'
          smooth={true} // Enable smooth scrolling
          duration={500} // Set scroll duration (milliseconds)
          offset={-80} // Adjust scroll offset if needed (e.g., for fixed header)
          // onClick={handleDrawerClose}
          key={item.name}
          // easing='easeInOutQuad' // Use easeInOutQuad easing
          // or
          // easing='easeInOutCubic'
          // easing='easeInOutSine'
          href={item.url}
        >
          <li className='px-4 cursor-pointer font-outfit'>{item.name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false) // State to track drawer visibility

  const handleDrawerOpen = () => setIsDrawerOpen(true)
  const handleDrawerClose = () => setIsDrawerOpen(false)

  // Get the current scroll position before opening the drawer (optional)
  const scrollYBeforeOpen = window.scrollY || window.pageYOffset // Polyfill for older browsers

  return (
    <header className='flex justify-between items-center  mt-5 px-5'>
      <div className='cursor-pointer flex items-center py-1'>
        <img src={Image.ChhLogo} alt='Logo' width={58} className='' />
        <div className='hidden lg:block'>
          <p className='text-primary text-[1.25rem] font-bold'>
            CENTRE FOR HUMAN HABITAT
          </p>
          <p className='text-[0.58rem] font-outfit text-center'>
            ARCHITECTS, ENGINEERS, INTERIOR DESIGNERS & CONSULTANTS
          </p>
        </div>
      </div>
      <div className='flex items-center gap-3 px-4 py-3 rounded'>
        <div className=''>
          <NavLinks />
          <div className='block md:hidden'>
            <div className='block md:hidden'>
              <Drawer open={isDrawerOpen} onClose={handleDrawerClose}>
                <DrawerTrigger onClick={handleDrawerOpen}>
                  <img
                    src={Image.BurgerMenu}
                    alt='BurgerMenu'
                    className='cursor-pointer'
                    width={28}
                  />
                </DrawerTrigger>
                <DrawerContent>
                  <ul className='flex flex-col gap-3 p-4'>
                    {NAV_LINKS.map((item) => (
                      <Link
                        to={item.url.substring(1)} // Remove leading '#'
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Set scroll duration (milliseconds)
                        offset={-80} // Adjust scroll offset if needed (e.g., for fixed header)
                        onClick={handleDrawerClose}
                        key={item.name}
                        href={item.url}
                      >
                        <li className='px-4 cursor-pointer font-outfit'>
                          {item.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                  <DrawerFooter>
                    <DrawerClose>
                      <button
                        className='text-xs text-white bg-primary px-4 py-2 rounded font-bold'
                        onClick={handleDrawerClose}
                      >
                        Close
                      </button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-2 max-w-fit px-4 py-3 cursor-pointer'>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant=''
                  className='text-xs text-white font-bold font-outfit bg-primary hover:bg-primary hover:text-white rounded-none'
                >
                  CONTACT US{' '}
                  <span>
                    <img src={Image.ArrowIcon} alt='ArrowIcon' />
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  )
}
