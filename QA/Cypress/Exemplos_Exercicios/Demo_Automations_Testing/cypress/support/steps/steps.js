import objects from '../page_objects/objects'

const pagina = new objects()

Given("Que eu acesso o site automationtesting", () => {
    pagina.abrirUrl();
})

When("Eu preencher todos os campos do Formulário", () => {
    pagina.cadastro();
})

And("Clicar no botão Submit", () => {
    pagina.clicarSubmit();
})

Then("O cadastro deve ser realizado com sucesso", () => {
    pagina.validarTela();
})