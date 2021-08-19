import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Algun titulo';
    const url = 'https://localhost/imagen.jps';
    const wrapper = shallow( <GifGridItem title={ title } url={url} />);

    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    });

    test('debe de tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        const { src, alt } = img.props();
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe(true)

    })
    
    
    
    
    
})
