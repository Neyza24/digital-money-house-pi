import Image from 'next/image'
import { Button } from './ui/button'


const Header = () => {
  return (
    <div className="flex justify-between items-center gap-4 bg-[#201F22] p-4 px-5">
      <Image
        className="dark:invert"
        src="/logo-01.svg"
        alt="Virtual Walletlogo"
        width={90}
        height={30}
        priority
      />

      <div className="flex gap-2">
        <Button variant='outline'>Ingresar</Button>
        <Button variant='primary'>Crear cuenta</Button>
      </div>
      </div>
  )
}

export default Header
