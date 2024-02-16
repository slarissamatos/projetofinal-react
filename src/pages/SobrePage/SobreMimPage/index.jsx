import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const SobreMimPage = () => {
  return (
    <Box margin="10px" display="flex" alignItems="center" justifyContent="center">
      <Box
        component="div"
        sx={{
          marginRight: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
    
      </Box>

      <Box textAlign="center" flex="1" display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3">Sobre mim</Typography>
        <Typography>
          Meu nome é Larissa, tenho 22 anos, sou mineira de Uberlândia e sou apaixonada pela licenciatura. Me formo em História (licenciatura e bacharelado) pela Universidade Federal de Uberlândia em abril. Tive meu primeiro contato com programação através do ciclo formativo da Pretalab e estou iniciando minha carreira na docência. Tenho muito interesse na área de tecnologia com foco em frontend, principalmente pelas oportunidades de mudança de vida. Meu objetivo é consolidar minha carreira no mercado, unindo tecnologia e educação, duas áreas que estão de acordo com minha trajetória.
        </Typography>

        <Box marginTop={2}>
          <a href="https://www.linkedin.com/in/larissa-matos-07b0ba189/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ fontSize: '30px', marginRight: '10px', color: '#333' }} />
          </a>

          <a href="https://github.com/slarissamatos" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ fontSize: '30px', marginRight: '10px', color: '#333' }} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default SobreMimPage;
