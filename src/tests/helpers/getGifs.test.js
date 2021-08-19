import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs fetch', () => {
    
    test('debe de traer 10 elemntos', async() => {
        
        const gifs = await getGifs('Mega Man x7');
        
        expect( gifs.length).toBe( 10 );
    });

    test('debe de traer 10 elemntos', async() => {
        
        const gifs = await getGifs('');
        console.log(gifs);
        expect( gifs.length).toBe( 0 );
    })
    
})
