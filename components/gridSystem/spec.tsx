/* global expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { Grid, Column } from '../gridSystem'

describe('gridSystem tests', () => {
  const baseGridComponent = (props?: object) => <Grid {...props} />
  const baseColumnComponent = (props?: object) => <Column {...props} />

  describe('grid component', () => {
    describe('basic tests', () => {
      it('matches the snapshot', () => {
        const component = baseGridComponent()
        const tree = create(component).toJSON()
        expect(tree).toMatchSnapshot()
      })

      it('renders the component', () => {
        const wrapper = shallow(baseGridComponent({id: 'grid'}))
        const assertion = wrapper.find('#grid').length
        expect(assertion).toBe(1)
      })
    })

    describe('component behavior', () => {
      it('can have an id', () => {
        const wrapper = shallow(baseGridComponent({id: 'gridThing'}))
        const assertion = wrapper.props().id
        expect(assertion).toBe('gridThing')
      })

      it('can be disabled', () => {
        const wrapper = shallow(baseGridComponent({disabled: true}))
        const assertion = wrapper.props().disabled
        expect(assertion).toBe(true)
      })

      it('defines a custom column size', () => {
        const wrapper = shallow(baseGridComponent({columns: 3}))
        const assertion = wrapper.props().columns
        expect(assertion).toBe(3)
      })
    })

    describe('theming', () => {
      it('allows theming the `padding` property', () => {
        const component = baseGridComponent({theme: { padding: '20px' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('padding', '20px')
      })

      it('allows theming the `grid-gap` property', () => {
        const component = baseGridComponent({theme: { gridGap: '15px' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('grid-gap', '15px')
      })

      it('allows theming the `max-width` property', () => {
        const component = baseGridComponent({theme: { maxWidth: '150px' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('max-width', '150px')
      })

      it('allows theming the `height` property', () => {
        const component = baseGridComponent({theme: { height: '100%' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('height', '100%')
      })

      it('allows theming the `color` property', () => {
        const component = baseGridComponent({theme: { color: 'purple' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('color', 'purple')
      })

      it('allows theming the `background-color` property', () => {
        const component = baseGridComponent({theme: { backgroundColor: 'green' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('background-color', 'green')
      })
    })
  })

  describe('column component', () => {
    describe('basic tests', () => {
      it('matches the snapshot', () => {
        const component = <Column />
        const tree = create(component).toJSON()
        expect(tree).toMatchSnapshot()
      })

      it('renders the component', () => {
        const wrapper = shallow(<Column id='column' />)
        const assertion = wrapper.find('#column').length
        expect(assertion).toBe(1)
      })
    })

    describe('component behavior', () => {
      it('can have an id', () => {
        const wrapper = shallow(baseColumnComponent({id: 'dataItemThing'}))
        const assertion = wrapper.props().id
        expect(assertion).toBe('dataItemThing')
      })

      it('can have a custom size', () => {
        const wrapper = shallow(baseColumnComponent({size: 3}))
        const assertion = wrapper.props().size
        expect(assertion).toBe(3)
      })
    })

    describe('theming', () => {
      it('allows theming the `justify-content` property', () => {
        const component = baseColumnComponent({theme: { justifyContent: 'center' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('justify-content', 'center')
      })

      it('allows theming the `align-items` property', () => {
        const component = baseColumnComponent({theme: { alignItems: 'center' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('align-items', 'center')
      })

      it('allows theming the `background-color` property', () => {
        const component = baseColumnComponent({theme: { backgroundColor: 'purple' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('background-color', 'purple')
      })

      it('allows theming the `flex-direction` property', () => {
        const component = baseColumnComponent({theme: { flexDirection: 'column' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('flex-direction', 'column')
      })
    })
  })
})
