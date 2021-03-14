
import SelecaoCidadePage from '../pageobjects/SelecaoCidadePage'
const selecaoCidadePage = new SelecaoCidadePage

Given("que acesse o site da BRK ambiental", () => {
    selecaoCidadePage.acessarSite();
})

And("preencher no campo Informe a Cidade a cidade de Limeira", () => {
    selecaoCidadePage.clicarCampoCidade();
})

When("selecionar a cidade na lista", () => {
    selecaoCidadePage.clicarCidadeLista();
})

And("acionar a escolha clicando em Esta é a cidade da minha conta", () => {
    selecaoCidadePage.clicarBotaoSalvarCidade();
})

Then("validar a mensagem da cidade VOCÊ ESTÁ NA CIDADE DE LIMEIRA", () => {
    selecaoCidadePage.mensagemCidadeAtual();
})
