import { shallowMount } from '@vue/test-utils'
import showHide from './showHide.vue'

describe('showHide.vue', () => {
    it('it should show the button with a specific text when mounted', () => {
        const expectedText = "Show/ Hide alternativ";

        const wrapper = shallowMount(showHide);
        const button = wrapper.find('button')
        const buttonExists = button.exists(); //to see if button exist
        const buttonHtmlElement = button.element;
        const buttonIsVisible = buttonHtmlElement.style.display !== 'none'
        const actualText = button.text();
        
        expect(buttonExists).toBe(true)
        expect(buttonIsVisible).toBe(true)
        expect(actualText).toBe(expectedText)

    })

    it('it should show the other element when mounted', () => {
        const wrapper = shallowMount(showHide);
        const content = wrapper.find('.content');

        expect(content.exists()).toBe(true);
        expect(content.element.style.display).not.toBe('none');
    })

    it('it should hide the element when button is clicked', async() => {
        const wrapper = shallowMount(showHide);
        const button = wrapper.find('button')
        await button.trigger('click');
        const content = wrapper.find('.content');
        expect(content.exists()).toBe(true);
        expect(content.element.style.display).toBe('none');
    })

    it('it should show the Show Me button when mounted', async() => {
        const wrapper = shallowMount(showHide) //mounting the component
        const button = wrapper.find('button') //finding the button
        await button.trigger('click');

        const hideContent = wrapper.find('.hide'); //find the element p to hide
        expect(hideContent.exists()).toBe(true); //cheking if its true
        expect(hideContent.element.style.display).not.toBe('none'); //display should be none
    })

    it('it should hide the text when Show Me Button is clicked', async() => {
        const wrapper = shallowMount(showHide) //mounting the component
        const button = wrapper.find('button') //finding the button
        await button.trigger('click');

        const hideContent = wrapper.find('.hide'); //find the element p to hide
        expect(hideContent.exists()).toBe(true); //cheking if its true
        expect(hideContent.element.style.display).toBe(''); //display should be none
    })
    // it('it should show the element when button is clicked and it is invisible', () => {
    // })
   
})