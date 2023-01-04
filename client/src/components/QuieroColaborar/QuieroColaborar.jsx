import style from './QuieroColaborar.module.css'
// import mercadoLibre from '../../img/logosPasarelas/mercadolibre.svg'
// import dineroMail from '../../img/logosPasarelas/dineromail.svg'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/NavBar'
import { useDispatch } from 'react-redux';
import postMeli from "../../redux/actions/action"

const QuieroColaborar = () => {
  
  const dispatch = useDispatch();

  const handleClick = (title, unit_price) => {
    dispatch(postMeli({ title, unit_price }));
  }

  return (
    <div>
      <Navbar/>

    <div className={style.div}>
      
      <h1 className={style.h1Colaborar}>¡Quiero colaborar!</h1>
      <p className={style.p}>El Campito Refugio es una ONG con sus balances al día. <br></br>Nuestra cuenta bancaria 
         está auditada a nombre del refugio por lo cual cada donación es rendida.</p>
      <p className={style.p}>Podés solicitar tu RECIBO LEGAL escribiendo a madrinasdelcampito@gmail.com</p>
      <div className={style.contenedorPasarelas}>{/* Contenedor de las pasarelas */} 
        
        <div className={style.cuentaBancaria}>
          <h2>CUENTA BANCARIA</h2> <br></br>
          <h3>Banco Santander Rio</h3>
          <p className={style.p}>Refugio El Campito <br></br>Cta Cte n° 0123787 - Sucursal 180 <br></br>Alias refugioelcampito <br></br>CBU 0720180220000001237872 <br></br>CUIT 30-71212593-0</p>
        </div>
        <div className={style.debitoAutomatico}>
          <h2>POR DÉBITO AUTOMÁTICO <br></br>
         CON TARJETA VISA Y VISA ELECTRÓN</h2>  
          <p>Si querés colaborar mensualmente con el refugio y con tus ahijados,
           ahora podés hacerlo utilizando tu tarjeta de crédito. Elegí el monto que
           quieras donar, y se debitará automáticamente de tu cuenta todos los meses</p>
          <button className={style.debitoButton}>
            <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848573564c018579faf7e504ff">
              Suscribirme
            </a>
          </button>
        </div>

      </div>    
        <div className={style.pasarleML}>
        <img src ="https://res.cloudinary.com/dakezkhho/image/upload/v1671806580/refugio/medios%20de%20pago/mercadolibre_jhklsb.svg" className={style.imgML} alt="Logo Mercado Libre"/>
        <div className={style.pasarelDMbuttons}>
        <div className={style.noWrap}> <button className={style.buttonML} onClick={() => handleClick('$200', 200)}>$200</button>
          <button className={style.buttonML} onClick={() => handleClick('$300', 300)}>$300</button>
          <button className={style.buttonML} onClick={() => handleClick('$500', 500)}>$500</button>
          <button className={style.buttonML} onClick={() => handleClick('$1000', 1000)}>$1000</button></div>
          <div className={style.noWrap}><button className={style.buttonML} onClick={() => handleClick('$3000', 3000)}>$3000</button>
          <button className={style.buttonML} onClick={() => handleClick('$5000', 5000)}>$5000</button>
          <button className={style.buttonML} onClick={() => handleClick('$7000', 7000)}>$7000</button>
          <button className={style.buttonML} onClick={() => handleClick('$10000', 10000)}>$10000</button>
          <button className={style.buttonML}>$<input type='number' placeholder='Ingrese un valor' classname={style.priceInput}></input></button></div>
        </div>
      </div>  
      <div className={style.pasarelaDM}>
        <img src ="https://res.cloudinary.com/dakezkhho/image/upload/v1671808252/refugio/medios%20de%20pago/cafecito_rhi2y8.png" className={style.imgDM} alt="Logo Mercado Libre"/>
        <div className={style.pasarelaDMbuttons}>
          <div className={style.noWrap}><button className={style.buttonDM}>$15</button>
          <button className={style.buttonDM}>$50</button>
          <button className={style.buttonDM}>$100</button>
          <button className={style.buttonDM}>$_____</button></div>
          <div className={style.noWrap}><button className={style.buttonDM}>U$15</button>
          <button className={style.buttonDM}>U$50</button>
          <button className={style.buttonDM}>U$100</button>
          <button className={style.buttonDM}>$_____</button></div>
        </div>
      </div> 
      <Footer/>
    </div>
    </div>

  )
}

export default QuieroColaborar;