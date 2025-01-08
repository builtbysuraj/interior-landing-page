import { NAV_LINKS } from '../constants'
import { Image } from '../utils/images'
import { Button } from './ui/button'

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from './ui/dialog'

import ContactForm from './ContactForm'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from './ui/drawer'

function NavLinks() {
  return (
    <ul className='hidden md:flex items-center gap-3'>
      {NAV_LINKS.map((item) => (
        <a href={item.url} key={item.name}>
          <li className='px-4 cursor-pointer font-outfit'>{item.name}</li>
        </a>
      ))}
    </ul>
  )
}
// Change header and move the company name to the about us and only keep the logo
export default function Header() {
  return (
    <header className='flex justify-between items-center  mt-5 px-5'>
      <div className='cursor-pointer flex items-center py-1'>
        <img
          src={Image.ChhLogo}
          alt='Logo'
          width={58}
          // min-w-24
          className=''
        />
        <div className='hidden lg:block'>
          <p className='text-primary text-[1.25rem] font-bold'>
            CENTER FOR HUMAN HABITAT
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
              <Drawer>
                <DrawerTrigger>
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
                      <a key={item.name} href={item.url}>
                        <li className='px-4 cursor-pointer font-outfit'>
                          {item.name}
                        </li>
                      </a>
                    ))}
                  </ul>
                  <DrawerFooter>
                    <DrawerClose>
                      <button className='text-xs text-white bg-primary px-4 py-2 rounded font-bold'>
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
