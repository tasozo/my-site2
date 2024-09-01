import { FaArrowLeft } from 'react-icons/fa6'
import { Button } from '../button'
import Link from 'next/link'
import { MENU_ITEMS } from '../../../constants/menuItems'

export default function MenuDrawer({}) {
  return (
    <div
      className={`
        fixed
        top-0
        h-screen w-80
        bg-pink-300
          `}
    >
      <Button aria-label='close' role='button'>
        <FaArrowLeft />
      </Button>
      <nav
      className={`
        flex flex-col gap-4
        p-4
      `}
      
      >
        

        {MENU_ITEMS.map((item, index) => (
          <Link key={index} href={item.url}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

