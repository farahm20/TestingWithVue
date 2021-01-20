import { shallowMount } from '@vue/test-utils'
import Options from './Options.vue'


describe('Options.vue', () => {
    it('Should display 5 element when it is mounted', () => {
        const wrapper = shallowMount(Options)
        const expected = 5;
        //wrapper ARRAY is different from noraml arrray
        const actual = wrapper.findAll('.option').length
        expect(actual).toBe(expected)
    })

    it('it should have 0 elements selected when its mounted', () => {
        const wrapper = shallowMount(Options)
        const expected = 0;
        //wrapper ARRAY is different from noraml arrray
        const actual = wrapper.findAll('.option.selected').length
        expect(actual).toBe(expected)
    })

    it('it should, when clicked and no elements are selected, select the element', async() => {
        const wrapper = shallowMount(Options)
		const expectedSelectedBefore = 0, expectedSelectedAfter = 1

		const actualSelectedBefore = wrapper.findAll('.option.selected').length
		const first = wrapper.find('.option');
		await first.trigger('click');

		const actualSelectedAfter = wrapper.findAll('.option.selected').length

		expect(actualSelectedBefore).toBe(expectedSelectedBefore)
		expect(actualSelectedAfter).toBe(expectedSelectedAfter)


    })

})
/**
 * Css
 * .x, .y - all elements that have a either y
 * .x .y    all y that are children to x
 * .x > .y  all y that are direct children to x
 * .x.y     all element that have both x AND Y 
 * .x + .y  all y that come direct after x
 */
//It should display 5 elements when its mounted
//it should have 0 elements selected when its mounted
//it should, when clicked and no elements are selected, select the element
//it should, when clicked and one other element is selected, slect the other element
//it should remove a slectuon when a slected element is clicked