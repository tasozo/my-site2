
import { FaArrowLeft } from 'react-icons/fa6'
import { Button } from '../button'
import Link from 'next/link'
import { MENU_ITEMS } from '../../../constants/menuItems'

// MenuDrawerのProps追加
export default function MenuDrawer({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`
        fixed
        top-0
        h-screen w-80
        bg-pink-300
        ${isMenuOpen ? 'left-0' : '-left-80'}
        `
        // 上の１行追加
        }
    >
      <Button
        aria-label='close'
        role='button'
        /* ↓　ここから　↓ */
        onClick={() => setIsMenuOpen(false)}
        variant='default'
        className='m-4 size-12'
        /* ↑　ここまで追加　↑ */
      >
        <FaArrowLeft />
      </Button>
      <nav
        /* ↓　ここから　↓ */
        className={`
          flex flex-col gap-4
          p-4
        `}
        /* ↑　ここまで追加　↑ */
      >
        {MENU_ITEMS.map((item, index) => (

          // ↓のonClick部分を追加
          <Link key={index} href={item.url} onClick={() => setIsMenuOpen(false)}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
