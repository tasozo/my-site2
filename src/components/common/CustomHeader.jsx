// React-iconsからFontAwesomeのメニューアイコンをインポート
import { FaBars } from 'react-icons/fa6'
// インストールしたButtonコンポーネントをインポート
import { Button } from '../ui/button'
// Next.jsで使えるLinkコンポーネントをインポート
import Link from 'next/link'
// 定数のリストとして作成したメニューの一覧をインポート
import { MENU_ITEMS } from '../../constants/menuItems'

export default function CustomHeader() {
  return (
    <div>
      <header>
        {/* Buttonコンポーネントを使ってメニューアイコンを表示 */}
        <Button aria-label='menu' role='button' variant='default'>
          <FaBars />
        </Button>

        <h1>My-site</h1>
        <nav>
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
