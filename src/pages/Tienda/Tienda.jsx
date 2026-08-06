import { productos } from "../../data/productos";
import CardProducto from "../../components/CardProducto/CardProducto";

function Tienda() {

    return (

        <div>

            <h1>🪙 Centro de Recompensas</h1>

            {

                productos.map((producto) => (

                    <CardProducto
                        key={producto.id}
                        producto={producto}
                    />

                ))

            }

        </div>

    );

}

export default Tienda;