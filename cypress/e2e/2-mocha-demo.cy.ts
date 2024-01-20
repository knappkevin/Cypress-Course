describe('template spec', () => {
  before(()=>{
    cy.log('before hook')
  });
  after(()=>{
    cy.log('after hook')
  });
  beforeEach(()=>{
    cy.log('before each hook')
  });
  afterEach(()=>{
    cy.log('after each hook')
  });
  it('test1', () => {
    cy.log('hello world')
  });
  it('test2', () => {
    cy.log('hello world')
  });
  it.skip('test3', () => {
    cy.log('hello world')
  });
  // it.only('test4', () => {
  //   cy.log('hello world')
  // });
})