import * as React from 'react'
import type { NextPage } from 'next'
import GlobalStyles from '@mui/material/GlobalStyles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import styles from './index.module.scss'
import FloatingWhatsApp from 'react-floating-whatsapp'

const buttonVariant = 'contained' // or outlined

const tiers = [
  {
    title: 'Monotributistas',
    description: ['Inscripción', 'Recategorización', 'Facturación', 'Asistencia contable'],
    buttonText: 'Ver más',
    buttonVariant: buttonVariant
  },
  {
    title: 'Responsables Inscriptos',
    description: ['Inscripción', 'Declaraciones Juradas', 'Asistencia contable'],
    buttonText: 'Ver más',
    buttonVariant: buttonVariant
  },
  {
    title: 'Empresas',
    description: ['Creación de S.A. y S.R.L.', 'Impuestos y Balances', 'ganancias', 'Asistencia contable'],
    buttonText: 'Ver más',
    buttonVariant: buttonVariant
  },
  {
    title: 'Sueldos',
    description: ['Recibos de sueldo', 'Formulario 931 mensual', 'Asesoría + novedades', 'Libro de sueldos digital'],
    buttonText: 'Ver más',
    buttonVariant: buttonVariant
  }
]

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <div>
        <FloatingWhatsApp
          phoneNumber="+5491134482240"
          accountName="Matías Lorenzo"
          statusMessage="Usualmente responde en menos de 1 hora"
          chatMessage="Buenos días! Cómo podemos ayudarte?"
          placeholder="Buenas! Quiero asesoramiento en..."
          notification={true}
          notificationSound={true}
          avatar="mati.png"
        />
      </div>
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography component="h1" variant="h1" align="center" color="text.primary" gutterBottom>
          Estudio Contable Lorenzo
        </Typography>
        <Typography variant="h3" align="center" color="text.secondary" component="p">
          Tus impuestos en manos de expertos
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={12} md={6} lg={3} className={styles.grid}>
              <Card className={styles.card}>
                <CardHeader
                  className={styles.cardHeader}
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={null}
                  subheaderTypographyProps={{
                    align: 'center'
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
                  }}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button className={styles.button} fullWidth variant={tier.buttonVariant as 'outlined' | 'contained'}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home
