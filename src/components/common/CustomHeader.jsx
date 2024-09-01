// React-iconsからFontAwesomeのメニューアイコンをインポート
import { FaBars } from 'react-icons/fa6'
// インストールしたButtonコンポーネントをインポート
import { Button } from '../ui/button'
// Next.jsで使えるLinkコンポーネントをインポート
import Link from 'next/link'
// 定数のリストとして作成したメニューの一覧をインポート
import { MENU_ITEMS } from '../../constants/menuItems'

import MenuDrawer from '../ui/drawers/MenuDrawer'

export default function CustomHeader() {
  return (
    <div
    className={`
      fixed
      w-full
      bg-yellow-300
      p-4 md:px-32
      `}
    >

<MenuDrawer />

      <header
      className={`
        flex justify-between items-center
        `}
      >

        {/* Buttonコンポーネントを使ってメニューアイコンを表示 */}
        <Button aria-label='menu' 
        role='button'
         variant='default'
          className='block md:hidden size-12'
          >
          <FaBars />
        </Button>

        <h1 className='text-2xl hidden md:block'>My-site</h1>
        <nav
          className={`
            hidden md:flex gap-4
            `}
        >

          {/* メニューの一覧を表示 */}
          {MENU_ITEMS.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
