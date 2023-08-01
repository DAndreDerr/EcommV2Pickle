describe('home page testing', ()=>{
  beforeEach(()=>{
      cy.visit('http://localhost:3000/')
  })

  //check Heading has correct text 
  it('check homepage heading', ()=>{
    cy.get(':nth-child(1) > .section-heading').contains("Welcome to Dre's Pickleball Paradise")
  })

  it('check section description has correct text',()=>{
    cy.get(':nth-child(1) > .section-description').contains("Unleash Your Pickleball Passion in Paradise!")
  })

  it('check imgs for alt',()=>{
    // get all images
    cy.get('img').each(($img) => {
      // check each img has an alt
      cy.wrap($img).should('have.attr', 'alt');
    });
  })

  it('checks if hero contains welcome img',()=>{
    cy.get('.hero-image').find('img').should('exist');

  })



})