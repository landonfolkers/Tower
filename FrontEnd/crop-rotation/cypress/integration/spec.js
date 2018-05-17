describe('content', function () {
    it('show all correct content', function () {
        cy.visit('http://localhost:3000')
        cy.get('h1').contains('Crop Rotator')
        cy.get('h3').contains('Look up your previous soil samples')
        cy.get('h3').contains('Update your previous soil samples')
        cy.get('h3').contains('Delete your previous soil samples')
    })
    it('has forms and submit buttons', function () {
        cy.get('form').contains('Name')
        cy.get('form').contains('Crops')
        cy.get('form').contains('Location')
        cy.get('form').contains('Soil Type')
        cy.get('form').contains('PH Level')
        cy.get('form').contains('Submit').click()
        cy.get('h2').contains('You need to enter your field information.')
    })
}) 