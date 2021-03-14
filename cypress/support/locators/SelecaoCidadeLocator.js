class SelecaoCidadeLocator {

    campoCidade = () => { return 'acn-form-auto-complete' }

    selecaoCidadeLista = () => {return '.select > :nth-child(47)'}

    botaoSalvarCidade = () => {return '.is-fullWidth'}

    cidadeAtual = () => {return '.city'}
}

export default SelecaoCidadeLocator;