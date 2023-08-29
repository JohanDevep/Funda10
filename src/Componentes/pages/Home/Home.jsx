import "./Home.css";
import "./Somos.css";
import "./proposito.css";
import "./Aprendizaje.css";
import "./capacitaciones.css";
import "./Corporativos.css";
import "./Facturacion.css";
import "./Mision.css";
import "./beneficios.css";
import datos from './Card/datos';
import Capacitaciones from './Card/Card';
import Proposito from "./CardProposito/DatosProposito";
import Proposito1 from "./CardProposito/DatosProposito1";
import CardPropositos from './CardProposito/CardProposito';
import CardAprendizaje from "./CardAprendizajes/CardAprendizaje";
import Aprendizaje from './CardAprendizajes/DatosAprendizaje';
import Corporativos from './CardCorporativos/DatosCorporativos';
import CardCorporativos from "./CardCorporativos/CardCorporativos";
import Facturacion from "./CardFacturacion/DatosFacturacion";
import CardFacturacion from "./CardFacturacion/CardFacturacion";


export const Home = () => {
  return (
    <inicio className="inicio">
      <div className="container">
        <div className="imagen-home">
        </div>
        <img
          className="logo-inicio"
          alt="Image"
          src="images/image1.png"
        />
        <p className="promovemos">
          Promovemos la empleabilidad y emprendimiento,
          <br /> generando nuevas oportunidades.
        </p>
      </div>
      <div className="capacitaciones">
        <div className="titulo-capacitaciones">
          <div className="nuestras-capacitaciones">NUESTRAS CAPACITACIONES</div>
          <div className="wrapper">
            {datos.map(dato =>
              <Capacitaciones
                imagen={dato.imagen}
                descripcion={dato.descripcion}
              />
            )}
          </div>
        </div>
      </div>
      <div className="somos">
        <div className="quienes-somos">
          <img
            className="imagen"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/image-7-1.png"
          />
          <p className="somos-preguntas">
            ¿Quienes Somos?
          </p>
          <p className="somos-creadas">
            Somos una fundación creada por mujeres, para ayudar a subsanar las necesidades tecnológicas de todos
          </p>
        </div>
      </div>
      <div className="proposito">
        <div className="titulo-proposito">
          <div className="proposito-apoyar">CON EL PROPOSITO DE APOYAR</div>
          <div className="aquellas-personas">aquellas personas y microempresas en las siguientes</div>
          <div className="propositowapper">
            {Proposito.map(datos =>
              <CardPropositos
                titulo={datos.titulo}
                descripcion={datos.descripcion}
                imagen={datos.imagen}

              />
            )}
          </div>
          <img
            className="imagen-linea"
            alt="Image"
            src="images/imagen111.png"
          />
          <div className="propositowapper">
            {Proposito1.map(datos =>
              <CardPropositos
                titulo={datos.titulo}
                descripcion={datos.descripcion}
                imagen={datos.imagen}
              />
            )}
          </div>
        </div>
        <div className="mision">
          <img
            className="allura-feedback"
            alt="Allura feedback"
            src="images/mision.png"
          />
          <div className="text-mision">MISIÓN</div>
          <p className="nuestra-mision">
            Nuestra misión es capacitar a toda aquella población vulnerable por distintos factores de vida, para que
            puedan lograr sus propósito a través de la tecnología y el desarrollo de software.
          </p>
        </div>
        <div className="vision">
          <img
            className="vision-imagen"
            alt="Allura feedback"
            src="images/frame-34715_cleanup.png"
          />
          <div className="text-vision">VISIÓN</div>
          <p className="organizacion">
            Ser al 2027 una organización reconocida a nivel nacional por generar oportunidades a las mujeres madres
            cabeza de hogar, vulnerables, afrocolombianas, indígenas, de bajos recursos o discapacitadas radicadas en
            Colombia
          </p>
        </div>
        <div className="aprendizaje">
          <div className="titulo-aprendizaje">
            <div className="nuestro-aprendizaje">NUESTRO APRENDIZAJE</div>
            <div className="aprendizajewapper">
              {Aprendizaje.map(datos =>
                <CardAprendizaje
                  titulo={datos.titulo}
                  descripcion={datos.descripcion}
                  imagen={datos.imagen}

                />
              )}
            </div>
          </div>
        </div>
        <div className="corporativos">
          <div className="titulo-corporativos">
            <div className="nuestras-corporativos">VALORES CORPORATIVOS</div>
            <div className="corporativoswrapper">
              {Corporativos.map(dato =>
                <CardCorporativos
                  imagen={dato.imagen}
                  descripcion={dato.descripcion}
                />
              )}
            </div>
          </div>
          <div className="beneficios">
            <div className="titulo-beneficios">Beneficios de contratación</div>
            <div className="beneficio-general-todo">
              <div className="tres-circulos">
                <div className="beneficio-general">
                  <img
                    className="circulo-logo"
                    alt="Ellipse outline"
                    src="images/circulo.png"
                  />
                  <div className="texto-beneficio">Sin costos de liquidación.</div>
                </div>

                <div className="beneficio-general">
                  <img
                    className="circulo-logo"
                    alt="Ellipse outline"
                    src="images/circulo.png"
                  />
                  <p className="texto-beneficio">Rendimiento en el proyecto en procesos de empalme de desarrolladores.</p>
                </div>
                <div className="beneficio-general">
                  <img
                    className="circulo-logo"
                    alt="Ellipse outline"
                    src="images/circulo.png"
                  />
                  <p className="texto-beneficio">
                    En caso de retrasos en el proyecto de desarrollo mayores a 15 días, la fundación asume el 50% del
                    salario del desarrollador.
                  </p>
                </div>
              </div>
              <div className="cinco-circulos">
                <div className="beneficio-general">
                  <img
                    className="circulo-logo"
                    alt="Ellipse outline"
                    src="images/circulo.png"
                  />
                  <p className="texto-beneficio">
                    Bonos colaborativos al personal en caso de recibir solo el 50% del salario pactado inicialmente.
                  </p>
                </div>
                <div className="beneficio-general">
                  <img
                    className="circulo-logo"
                    alt="Ellipse outline"
                    src="images/circulo.png"
                  />
                  <div className="texto-beneficio">Sin costo de incapacidades</div>
                </div>
                <div className="beneficio-general">
                  <img
                    className="circulo-logo"
                    alt="Ellipse outline"
                    src="images/circulo.png"
                  />
                  <div className="texto-beneficio">Sin costos de contratación.</div>
                </div>
                <div className="beneficio-general">
                  <img
                    className="circulo-logo"
                    alt="Ellipse outline"
                    src="images/circulo.png"
                  />

                  <p className="texto-beneficio">Sin costo de exámenes médicos.</p>
                </div>
                <div className="beneficio-general">
                  <img
                    className="circulo-logo"
                    alt="Ellipse outline"
                    src="images/circulo.png"
                  />
                  <p className="texto-beneficio">
                    Reemplazo de personal de forma inmediata en caso de accidente o reportarse enfermo.
                  </p>
                </div>
              </div>
            </div>
          </div >
          <div className="facturacion">
            <div className="nuestras-facturacion">FACTURACION</div>
            <img
              className="img-factu"
              alt="Ellipse outline"
              src="images/factu.png"
            />
            <div className="facturacionwrapper">
              {Facturacion.map(dato =>
                <CardFacturacion
                  descripcion={dato.descripcion}
                />
              )}
            </div>

          </div>
        </div >
      </div >
    </inicio >
  )
}