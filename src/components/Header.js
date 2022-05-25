/* rfce */
import Image from 'next/image'
import IconHeader from './IconHeader'
import { SearchIcon, HomeIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon, ViewGridIcon, BellIcon, ChatIcon, ChevronDownIcon } from '@heroicons/react/solid'

function Header () {
  return (
    <div className='flex items-center justify-between p-3 shadow-md'>

      {/* Left section */}
      <div className='flex items-center'>
        <Image
          src="https://picsum.photos/200"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
          priority="false"
          />

        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-500' />
          <input
            className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none'
            type="text"
            placeholder="Search on Facebook"
            />
        </div>
      </div>

      {/* Middle section */}
      <div className='flex space-x-2 md:space-x-6'>
        <IconHeader Icon={ HomeIcon } />
        <IconHeader Icon={ FlagIcon } />
        <IconHeader Icon={ PlayIcon } />
        <IconHeader Icon={ ShoppingCartIcon } />
        <IconHeader Icon={ UserGroupIcon } />
      </div>

      {/* Right section */}
      <div className='flex items-center space-x-2'>
        <p className='whitespace-nowrap pr-3 font-semibold'>Mario Vinillo</p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>

    </div>
  )
}

export default Header
