import { grey, green, indigo } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? grey[900] : grey[50],
  },
  primary: {
    // main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? indigo[200] : indigo[900]),
    main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? '#1E90FF' : '#123456'), // Biru terang atau gelap

  },
  secondary: {
    //main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? green[200] : green[800]),
    main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? '#FF6347' : '#008000'), // Oranye atau hijau

  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: '#3bb2d0',
  },
  buttonCustom: {
    main: '#FF6347', // Warna tombol khusus
  },
});
