import { Link } from "react-router-dom"


const ItemCard = ({item}) => {

    return (
        <div className="col-3 m-2">
            <h3>{item.nombre}</h3> 
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Categoria {item.category}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            {item.stock <= 10 && <p style={{color: 'brown'}}>¡Quedan pocas unidades!</p>}
            <Link to={`/detail/${item.id}`} className="btn btn-primary">Ver mas..</Link>  
        </div>
    )
}

export default ItemCard

