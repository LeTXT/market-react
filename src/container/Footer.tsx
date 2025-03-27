import '../styles/footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="aboutUsAndContact">
                <div className='aboutUs'>
                    <img src="./logo.png" alt="" />
                    <p>Na Real Caffee, prezamos pela qualidade e autenticidade do verdadeiro café especial. Nossos grãos são cultivados em regiões nobres, com terroir ideal para o desenvolvimento de aromas e sabores únicos. Cada etapa do processo, do plantio à torra, é cuidadosamente controlada para garantir um café puro, sem blends, preservando sua identidade e sofisticação.</p>
                    
                </div>
                <div>
                    <p>Atendimento</p>
                    <a href=""></a>
                </div>
            </div>

            <div className='paymentAndDeveloper'>
                <div className='paymentMethods'>
                    <p>Formas de pagamento</p>
                    <p>nenhuma</p>
                </div>
                <div>
                    <p>Desenvolvido por</p>
                    <p>Leandro e Anelim</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer