/* eslint-disable no-undef */

describe('search', ()=>{
    it('user searching data', () => {
        cy.visit('/');
        
        // login
        cy.findByRole('button', { name: /login to github/i }).click();
        cy.location('pathname', {timeout: 10000}).should('include', '/search');
    
        // Write and Search
        cy.get('.search-box-input').type('react')
        cy.get('.search-box-button').click();
        
        // check Results  
        cy.location('pathname', {timeout: 10000}).should('include', '/search/results');
        cy.get('[data-test="resultNumber"]')
        .then(number => number.text())
        .then(number => cy.expect(Number(number.replace(/\D/g, ''))).to.be.greaterThan(1));
        cy.findByText(/users/i).click();
        cy.get('[data-test="resultNumber"]')
        .then(number => number.text())
        .then(number => cy.expect(Number(number.replace(/\D/g, ''))).to.be.greaterThan(1));
    })
});