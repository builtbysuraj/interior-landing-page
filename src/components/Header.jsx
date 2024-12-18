import { NAV_LINKS } from '../constants'
import { Image } from '../utils/images'
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
      {NAV_LINKS.map((item, idx) => (
        <li key={item.name} className='px-4 cursor-pointer font-outfit'>
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default function Header() {
  return (
    <header className='flex justify-between items-center mt-5'>
      <div className='cursor-pointer'>
        <img src={Image.Logo} alt='Logo' width={90} className='min-w-24' />
      </div>
      <div className='flex items-center gap-3'>
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
                      <li
                        key={item.name}
                        className='px-4 cursor-pointer font-outfit'
                      >
                        {item.name}
                      </li>
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
        <div className='flex items-center gap-2 bg-primary max-w-fit px-4 py-3 cursor-pointer'>
          <button className='text-xs text-white font-bold font-outfit'>
            CONTACT US
          </button>{' '}
          <span>
            <img src={Image.ArrowIcon} alt='ArrowIcon' />
          </span>
        </div>
      </div>
    </header>
  )
}
