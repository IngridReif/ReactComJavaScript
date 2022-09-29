import './Colaborador.css'
                    //a mesma coisa que o props, porém desestruturado, pego o que já tem props e uso só o que eu quero
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroudColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;