import { Box, Container, Typography } from '@mui/material';
import { ButtonGroup, Button }from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';

const Content = () => {
  return (
    <Box sx={{ height: '100vh' ,display: 'flex', justifyContent: { sm: 'center', md: 'flex-end' }, alignItems: 'center', flexDirection: { sm: 'row', md:'column' }}}>
      <Container sx={{ py: 6, textAlign: { xs: 'center', md: 'left' }}} maxWidth="lg">
        <Typography variant="h2" component="h2" fontWeight="900" fontSize={{ xs: '2.5em', md: '4em' }} gutterBottom>Theeraprasert MEEMUI,</Typography>
        <Typography variant="body1">
          Hello there! 🌟 Welcome to my site!
        </Typography>
        <ButtonGroup sx={{ mt: 2 }} variant="text" color="inherit" disableElevation>
          <Button component="a" href='https://github.com/tubfuzzy' target='_blank'><GitHubIcon /></Button>
          <Button component="a" href='https://www.linkedin.com/in/theeraprasert-meemui' target='_blank'><LinkedInIcon /></Button>
          <Button component="a" href='' target='_blank'><XIcon /></Button>
          <Button component="a" href='https://web.facebook.com/theeraprased.meemui' target='_blank'><FacebookIcon /></Button>
          <Button component="a" href='mailto:tub.meemui@gmail.com'><AlternateEmailIcon /></Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default Content;
