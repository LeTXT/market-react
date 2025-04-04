import { credentialsArray } from "../../assets/credentials"

function AnotherMethod () {
    return (
        <div className="anotherMethod">
            <div className='orContinue'>
                <div className="line"></div>
                <p>ou continue com</p>
                <div className="line"></div>
            </div>
            <div className="Credentials">
                {credentialsArray.map((item, index) => {
                    return (
                        <button key={index}>
                            {/* <img src={item.img} alt={item.title} /> */}
                            <item.icon size={35} color={item.color} className="icon"/>
                        </button>
                    )    
                })}
            </div>                
        </div>
    )
}

export default AnotherMethod