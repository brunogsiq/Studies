import ellements from "../ellements_page/ellements"

const ellements = new ellements
const navegadorurl = cypress.config("baseurl")

class objects {
    abrirUrl() {
        cypress.visit(navegadorurl)
    }

    cadastro() {
        cy.get(ellements.campoFirstName()).type('Bruno')
        cy.get(ellements.campoLastName()).type('Siqueira')
        cy.get(ellements.campoAdress()).type('Rua A')
        cy.get(ellements.campoEmail()).type('bruno@gmail.com')
        cy.get(ellements.campoPhone()).type('48991059871')
    }

    clicarSubmit() {
        cy.get(ellements.clicarSubmit()).click()
    }

    validarTela() {
        cy.screenshoot()
    }
}

export default objects;