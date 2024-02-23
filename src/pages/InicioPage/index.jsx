import "./styles.css"
import * as React from 'react';


const InicioPage = () => {
  return (
    <div className="container">
    <div className="profile">
      <img className="profile-picture" src="src\pages\InicioPage\IMG_3936.jpg" alt="Imagem do Perfil" />
      <h2>Larissa Matos</h2>
      <br />
      <p> Olá mundo! Meu nome é Larissa, tenho 22 anos, sou mineira de Uberlândia e sou apaixonada pela licenciatura. Me formo em História (licenciatura e bacharelado) pela Universidade Federal de Uberlândia em abril. Tive meu primeiro contato com programação através do ciclo formativo da Pretalab e estou iniciando minha carreira na docência. Tenho muito interesse na área de tecnologia com foco em frontend, principalmente pelas oportunidades de mudança de vida. Meu objetivo é consolidar minha carreira no mercado, unindo tecnologia e educação, duas áreas que estão de acordo com minha trajetória.
      </p>

    </div>
  </div>

  );
}

export default InicioPage;
