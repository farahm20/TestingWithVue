import { mount, shallowMount } from '@vue/test-utils'
import { convertCompilerOptionsFromJson } from 'typescript';
import hello from './hello.vue'

describe('hello.vue', () => {
    // it('it should display hello on mount', () => {
    //     const expected = 'Hello';
    //     const wrapper = shallowMount(hello);

    //     console.log(wrapper.html);
    //     const actual = wrapper.html();
    //     console.log(actual);

    // })

    it('it should display count', () => {
        const expected = 'Count 1'
        const wrapper = mount(hello, {
            props: {
                count: 1
            }
        })
        console.log(wrapper.text())
        //wrapper ARRAY is different from noraml arrray
        const actual = wrapper.text();
        expect(actual).toBe(expected)
    })
})