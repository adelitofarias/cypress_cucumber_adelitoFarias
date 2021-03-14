import SelecaoCidadeLocator from '../locators/SelecaoCidadeLocator'
const selecaoCidadeLocator = new SelecaoCidadeLocator
const url = Cypress.config("baseUrl")

class SelecaoCidadePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
      
    // Clica no campo para inserir a string da cidade
    clicarCampoCidade(cidade){
        cy.get(selecaoCidadeLocator.campoCidade()).shadow().find('acn-form-input').shadow().find('input').type(cidade);

    }
    
    //Clica na lista exibida após o preenchimento da string da cidade
    clicarCidadeLista() {
        cy.get(selecaoCidadeLocator.selecaoCidadeLista()).click()
    }

    //Clica no botão de persistência da cidade
    clicarBotaoSalvarCidade() {
        cy.get(selecaoCidadeLocator.botaoSalvarCidade()).click()
    }

    //Verificar se contém a string com a cidade escolhida corretamente
    mensagemCidadeAtual(resultado) {
        cy.get(selecaoCidadeLocator.cidadeAtual()).should('contain', resultado)
    }
    
}

export default SelecaoCidadePage;