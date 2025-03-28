import { PiLinkedinLogoBold as Linkedin, PiGithubLogoBold as Github } from 'react-icons/pi'
import { SiGmail as Gmail } from "react-icons/si";

import '../styles/footer.scss'

const array = [
    {
        icon: Linkedin, 
        fill: '#0A66C2',
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/leandrogdo/'
    },
    {
        icon: Github, 
        fill: '#000000',
        title: 'Github',
        link: 'https://github.com/LeTXT'
    },
    {
        icon: Gmail, 
        fill: '#EA4335',
        title: 'Gmail',
        link: 'https://mail.google.com/mail/?view=cm&to=leandrog.oliveiracontact@gmail.com&su=Contato&body=Olá,%20gostaria%20de%20falar%20com%20você.'
    }
]

function Footer() {
    return (
        <div className="footer">
            <div className="aboutUsAndContact">
                <div className='aboutUs'>
                    <img src="./logo.png" alt="" />
                    <p>Na Real Caffee, prezamos pela qualidade e autenticidade do verdadeiro café especial. Nossos grãos são cultivados em regiões nobres, com terroir ideal para o desenvolvimento de aromas e sabores únicos. Cada etapa do processo, do plantio à torra, é cuidadosamente controlada para garantir um café puro, sem blends, preservando sua identidade e sofisticação.</p>
                    
                </div>
                <div className='contact'>
                    <p>ATENDIMENTO</p>
                    <div className='iconContainer'>{
                        array.map((item, index) => {
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