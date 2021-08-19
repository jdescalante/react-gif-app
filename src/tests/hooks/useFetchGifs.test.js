import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hooks useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Resident Evil' ));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un [] de imagenes y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Resident Evil' ));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toEqual(10);
        expect(loading).toBe(false);
    })
    
    
})
