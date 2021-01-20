import { shallowMount } from '@vue/test-utils'
import Counter from './Counter.vue'
describe('Counter.vue', () => {
    it('It should display "1" when mounted', () => {
        const expected = '1'

        const componentWrapper = shallowMount(Counter) //mount 
        const  spanWrapper = componentWrapper.find('.result')
        const actual = spanWrapper.text()

        expect(actual).toBe(expected)
        
    })
    it('It should increase displayed value by 1 when increase button is clicked', async () => {
        const expected = (1 + 1) + '' // '2'

        const wrapper = shallowMount(Counter)
        const increaseButton = wrapper.find('button')
        await increaseButton.trigger('click')

        const span = wrapper.find('.result')
        const actual = span.text()

        //const actual = getResultText(wrapper);
        expect(actual).toBe(expected)
    }) 

     it('It should decrese displayed value by 1 when decreased button is clicked', async() => {
        const expected = '0' // '2'

        const wrapper = shallowMount(Counter)
        const decreaseButton = wrapper.find('.decrease')
        await decreaseButton.trigger('click')
        // const actual = getResultText(wrapper);
     
        const span = wrapper.find('.result')
        const actual = span.text()
        expect(actual).toBe(expected)
    }) 

    it('It should be able to handle multiple clicks on both buttons', async() => {
        const expected = (1 + 4 -3) + '' // '2'

        const wrapper = shallowMount(Counter)
        const increaseButton = wrapper.find('.increase')
        const decreaseButton = wrapper.find('.decrease')

        await increaseButton.trigger('click')
        await increaseButton.trigger('click') 
        await decreaseButton.trigger('click') 
        await increaseButton.trigger('click') 
        await decreaseButton.trigger('click') 
        await decreaseButton.trigger('click') 
        await increaseButton.trigger('click') 
        // const actual = getResultText(wrapper);
     
        const span = wrapper.find('.result')
        const actual = span.text()
        expect(actual).toBe(expected)
    }) 
})