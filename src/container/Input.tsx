import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { PiMagnifyingGlassBold as Search } from "react-icons/pi"

import '../styles/input.scss'

function Input() {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (searchTerm.trim() !== "") {
          navigate(`/product?search=${searchTerm}`)
        }
      };

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquise por um produto"
                />

                <button type="submit">
                    <Search size={25} className="icon"/>
                </button>

            </form>
            
        </div>
    )
}

export default Input

// return (
//     <div className="input">
//         <form action="">
//             <input 
//                 type="text" 
//                 ref={inputRef} 
//                 placeholder="Pesquise por um produto" 
//             />

//             <button onClick={() => handleClick(inputRef.current)}>
//             <Link to="/product">
//                 <Search size={25} className="icon"/>
//             </Link>
//             </button>
            
//         </form>
        
//     </div>
// )

// const handleClick = (element: HTMLInputElement | null) => {
//     if(element === null) return

//     const filteredProducts: ProductType[] = []

//     if (element.value === '') {
//         element.focus()
//         return
//     }
    
//     for (let i = 0; i < productStore.length; i++){
//         if (productStore[i].title.toLowerCase().includes(element.value.toLowerCase())) {
//             filteredProducts.push(productStore[i])
//         }

//         setState(filteredProducts)
//     }
    
// }