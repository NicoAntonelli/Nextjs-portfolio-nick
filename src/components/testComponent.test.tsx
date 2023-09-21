import { mount } from 'cypress/react'
import TestComponent from "./testComponent"


it('mounts', () => {
    mount(<TestComponent />)
})
