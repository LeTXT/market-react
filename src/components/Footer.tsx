
import { footerLink } from '../assets/footerLink'

import '../styles/components/footer.scss'

interface FooterProps {
    path?: string
}


function Footer({path = '.'}: FooterProps) {
    return (
        <div className="footer">
            <div className="aboutUsAndContact">
                <div className='aboutUs'>
                    <img src={path+"/logo.svg"} alt="" />
                    <p>Na Real Caffee, prezamos pela qualidade e autenticidade do verdadeiro café especial. Nossos grãos são cultivados em regiões nobres, com terroir ideal para o desenvolvimento de aromas e sabores únicos. Cada etapa do processo, do plantio à torra, é cuidadosamente controlada para garantir um café puro, sem blends, preservando sua identidade e sofisticação.</p>
                    
                </div>
                <div className='contact'>
                    <p>ATENDIMENTO</p>
                    <div className='iconContainer'>{
                        footerLink.map((item, index) => {
                            return (
                                <div key={index} className='icon'>
                                    <a href={item.link} target="_blank" >
                                        <item.icon size={24} fill={item.fill} />
                                    </a>
                                </div>
                            )
                        })
                    }</div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer