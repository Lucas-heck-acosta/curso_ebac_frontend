/// <reference types="cypress" />

describe('testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve renderizar 3 contatos', () => {
        cy.get('.contato').should('have.length', 3)
    })

    it('Deve adicionar um contato',() => {

        cy.get('[type="text"]').type('aluno ebac')
        cy.get('[type="email"]').type('aluno@ebac.com')
        cy.get('[type="tel"]').type('12344982716')
        cy.get('.adicionar').click()
        cy.get('.contato').should('have.length', 4)
    })

    it('Deve alterar um contato',() => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('aluno EBAC')
        cy.get('[type="email"]').clear().type('aluno@ebac.com.br')
        cy.get('[type="tel"]').clear().type('12344982722')
        cy.get('.alterar').click()

        cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain', 'aluno EBAC')
        
    })
    it('Deve remover um contato',() => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.contato').should('have.length', 3)
    })
        
})

