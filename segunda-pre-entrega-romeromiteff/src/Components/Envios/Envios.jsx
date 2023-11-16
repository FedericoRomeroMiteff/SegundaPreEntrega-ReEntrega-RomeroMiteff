const Envios = () => {
  return (
    <div className='envio-div' >
        <h2 className='envios'>
        ¡Enviamos libros a todo el mundo!
        </h2>
<ul className='item-envio'>
    <li> 
        <h3 className='envio-card'>Tarifas y costos:</h3>
        <p className='txt-envio'>El costo varía según la ubicación en la que estés.Para saber el precio del envío tenés que iniciar la compra, poner tu país y código postal. 
        ** Los valores no incluyen impuestos aduaneros ya que varía constantemente según cada país. Averigüa si es tu país cobran impuestos a los libros</p>
        </li>
    <li> 
        <h3 className='envio-card'>Proceso de envío:</h3>
        <p className='txt-envio'>Para poder elegir el envío internacional simplemente se debe seleccionar el país de destino al principio del proceso de pago. Una vez que completas todos los datos te dará a elegir entre todas las zonas posibles. Tenés que seleccionar la opción que corresponda para evitar retrasos y cargos extra en tu envío</p>
        </li>
    <li>
        <h3 className='envio-card'>Restricciones y regulaciones aduaneras:</h3>
        <p className='txt-envio'>Normalmente los libros no tienen aranceles aduaneros, pero eso varía en cada país ¡Podés averiguar buscando en internet!</p>
        </li>
    <li>
        <h3 className='envio-card'>Embalaje y etiquetado</h3>
        <p className='txt-envio'> Utilizamos un embalaje testeado en envíos internacionales ¡Los libros siempre llegaron en perfecto estado!</p>
       </li>
    <li> 
        <h3 className='envio-card'>Seguridad del envío:</h3>
        <p className='txt-envio'>DHL es una de las empresas más reconocidas mundialmente para envíos internacionales. Depositamos en ellos nuestra confianza hace más de 4 años para los envíos internacionales</p>
        </li>
</ul>
</div>
  )
}

export default Envios