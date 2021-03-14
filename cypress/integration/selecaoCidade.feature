Feature: Atendimento por Cidade

    Scenario: Localizar cidade de Limeira
        Given que acesse o site da BRK ambiental
        And preencher no campo Informe a Cidade a cidade de "Limeira"
        When selecionar a cidade na lista
        And acionar a escolha clicando em Esta é a cidade da minha conta
        Then validar a mensagem da cidade VOCÊ ESTÁ NA CIDADE "Limeira"

Scenario Outline: Localizar cidade de Limeira
        Given que acesse o site da BRK ambiental
        And preencher no campo Informe a Cidade a cidade de "<cidade>"
        When selecionar a cidade na lista
        And acionar a escolha clicando em Esta é a cidade da minha conta
        Then validar a mensagem da cidade VOCÊ ESTÁ NA CIDADE "<resultado>"

        Examples:
        | cidade     | resultado  |
        | Limeira    | Limeira    |
        | Limeira    | Limeira    |
