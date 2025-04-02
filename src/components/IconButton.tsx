
// import { PiArrowLineRightBold as LineRight } from "react-icons/pi";
// import { onOff } from "../utils/showBag";
import { useBag } from '../hooks/useBag'

interface IconButtonProps {
    onClick: () => void
    Icon: React.ComponentType<{ size?: number; className?: string }>
    size?: number
    iconClass? : string
  }

function IconButton({ onClick, Icon, size = 25, iconClass = 'none' }: IconButtonProps) {
    const { bagItems } = useBag()
    
    return (

        <div className='iconButton'>
            <button onClick={onClick}>
                <div className={bagItems.length > 0 ? iconClass : 'none'}>
                    <p>{bagItems.length}</p>
                </div>

                <Icon size={size} className='btnIcon' />
            </button>
        </div>
        
    )
}

export default IconButton