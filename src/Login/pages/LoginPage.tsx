import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material"
import { Box, Button, Card, Checkbox, CheckboxProps, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import { styled } from '@mui/material/styles';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from "react";
import { Auth } from "../interfaces/Auth";
import { AuthValidate } from "../Validations/AuthValidation";


const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#f5f8fa',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
    ...theme.applyStyles('dark', {
      backgroundColor: '#30404d',
    }),
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
    ...theme.applyStyles('dark', {
      background: 'rgba(57,75,89,.5)',
    }),
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
    backgroundColor: '#394b59',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  }),
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{ '&:hover': { bgcolor: 'transparent' } }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

export const LoginPage = () => {

  const [user, setUser] = useState<Auth>({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const loginService = (usuario: Auth) => {

    //Validar
    if(AuthValidate(usuario) == false) return;

    //Login


    //Si tenemos el check de recordar, almacenar en las cookies

  }

  return (

    <Box>

      <Card sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>


        <h1>Inicio de Sesión</h1>


        <FormControl variant="standard" sx={{ mb: 2 }}>
          <InputLabel htmlFor="correo">
            Correo Electronico
          </InputLabel>
          <Input
            id="correo"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            style={{ paddingTop: '5px' }}
          />
        </FormControl>

        <FormControl variant="standard" sx={{ mb: 3 }}>
          <InputLabel htmlFor="clave">
            Contraseña
          </InputLabel>
          <Input
            id="clave"
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            }

            endAdornment={
              <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            }


            style={{ paddingTop: '5px' }}
          />
        </FormControl>

        <FormControlLabel
          sx={{ mb: 3}}
          label="Recordar usuario"
          control={<BpCheckbox />}>

        </FormControlLabel>


        <Button variant="contained" onClick={() => loginService(user)}>
          INICIAR SESIÓN
        </Button>

      </Card>


    </Box>

  )
}
