export const onOff = (state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) => state ? setState(false) : setState(true)

export const toggleClass = ( state: boolean, primaryClass: string, secundClass: string = 'show') => state ? `${primaryClass} ${secundClass}` : primaryClass 