/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Anchor, { AnchorProps } from '../anchor'

describe('anchor tests', () => {
  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = <Anchor href='#' text='testText' />
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(<Anchor id='anchor' href='#' text='testText' />)
      const assertion = wrapper.find('#anchor').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('defines a href', () => {
      const wrapper = shallow(<Anchor href='https://nespresso.com' text='testText' />)
      const assertion = wrapper.props().href
      expect(assertion).toEqual('https://nespresso.com')
    })

    it('defines a target', () => {
      const wrapper = shallow(<Anchor href='#' text='testText' target='_blank' />)
      const assertion = wrapper.props().target
      expect(assertion).toEqual('_blank')
    })

    it('rel defaults to noreferrer noopener', () => {
      const wrapper = shallow(<Anchor href='#' text='testText' />)
      const assertion = wrapper.props().rel
      expect(assertion).toEqual('noreferrer noopener')
    })

    it('can pass text', () => {
      const wrapper = shallow(<Anchor href='#' text='GOTCHA' />)
      const assertion = wrapper.html().includes('GOTCHA')
      expect(assertion).toBe(true)
    })
  })

  describe('theming', () => {
    it('allows theming the `textDecoration` property', () => {
      const component = <Anchor href='#' theme={ { textDecoration: 'underline' } } />
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('text-decoration', 'underline')
    })

    it('allows theming the `color` property', () => {
      const component = <Anchor href='#' theme={ { color: 'brown' } } />
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('color', 'brown')
    })

    it('allows theming the `fontSize` property', () => {
      const component = <Anchor href='#' theme={ { fontSize: '300px' } } />
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-size', '300px')
    })
  })
})
