Feature: Automacao de Formulario

    Scenario: Preenchendo formulario - Todos os campos
        Given Que eu acesso o site automationtesting
        When Eu preencher todos os campos do Formulário
        And Clicar no botão Submit
        Then O cadastro deve ser realizado com sucesso