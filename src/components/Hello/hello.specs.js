import { shallowMount } from '@vue/test-utils'
import hello from './hello.vue'

describe('hello.vue', () => {
    it('it should display hello', () => {
        const wrapper = shallowMount(hello)
        console.log(wrapper.html())
        //wrapper ARRAY is different from noraml arrray
        const actual = wrapper.html('<div>Hello</div>');
        expect(actual).toBe(expected)
    })
})