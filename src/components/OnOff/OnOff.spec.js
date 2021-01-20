import { shallowMount } from '@vue/test-utils'
import OnOff from './OnOff.vue'

describe('OnOff.vue', () => {
    it('should display "on" when the component is mounted', () => {
        const expected = 'On'

        const wrapper = shallowMount(OnOff)
        const actual = wrapper.text()

        expect(actual).toBe(expected)
    })

    it('should show "off" when button is clicked',  async () => {
        const expected = 'Off'

        const wrapper = shallowMount(OnOff)
        await wrapper.trigger('click')

        const actual = wrapper.text()
        expect(actual).toBe(expected)
    })

    it('should show "on" when button is clicked and text was "off" ',  async () => {
        const expected = 'On'

        const wrapper = shallowMount(OnOff)
        await wrapper.trigger('click') //from on till off
        await wrapper.trigger('click') //from off till on


        const actual = wrapper.text()
        expect(actual).toBe(expected)
    })


})