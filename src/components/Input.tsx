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
          navigate(`/searchResults?search=${searchTerm}`)
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
