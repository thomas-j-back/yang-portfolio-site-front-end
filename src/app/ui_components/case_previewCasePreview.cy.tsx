import React from 'react'
import { CasePreview } from './case_preview'

describe('<CasePreview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CasePreview
      proficiencies={['Ux Design']}
      title="Project Title"

    />)

  }).addListener
})