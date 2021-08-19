import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'


describe('Pruebas en componente <GifExpertApp />', () => {
    
    test('debe de mostrar el componente GifExpertApp', () => {
        const wrapper = shallow( <GifExpertApp />);

        expect( wrapper ).toMatchSnapshot()

    });

    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['Resident Evil', 'Marvel'];
        const wrapper = shallow( <GifExpertApp defaultCategory={ categories } />);
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GifGrid').length).toBe( categories.length );
    })
    
    
})
