/* rfce */
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'

function Header () {
  return (
    <>
      <div>
        <Image
          src="https://picsum.photos/200"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
          priority="false"
        />

        <SearchIcon />
        <input type="text" placeholder="Search"></input>
      </div>
    </>
  )
}

export default Header
