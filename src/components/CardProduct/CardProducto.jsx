function CardProducto({ producto }) {

    return (

        <div>

            <h2>

                {producto.icono} {producto.nombre}

            </h2>

            <p>{producto.descripcion}</p>

            <h3>{producto.precio} créditos</h3>

            <button>

                Comprar

            </button>

        </div>

    );

}

export default CardProducto;