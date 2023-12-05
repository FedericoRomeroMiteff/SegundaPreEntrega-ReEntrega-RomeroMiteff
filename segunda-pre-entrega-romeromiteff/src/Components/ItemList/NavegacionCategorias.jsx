import {Item} from "../Item/Item"
import {Filtro} from "../ItemList/Filtro"


const productoFiltrado = ({products, filterState, handleFilterChange}) => (
    <>
        <div>
            <h3>¿Qué equipo estas buscando?</h3>
            <input 
                type="text"
                placeholder="Buscar"
                className="me-2 searchBar"
                aria-label="Search"
                value={filterState} 
                onChange={handleFilterChange} 
            />
        </div>
        {
            filterState === "" ?
            products.map(product=> <Item key={product.id} product={product} /> )
        :
            products
            .filter(prod => prod.name.toLowerCase().includes(filterState.toLowerCase()))
            .map(product=> <Item key={product.id} product={product} /> )
        }
    </>
)

export const NavegacionCategorias = ({products}) => {
    return (
            <Filtro products= {products}>
                { productoFiltrado }
            </Filtro>
    )
}