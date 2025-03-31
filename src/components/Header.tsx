import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Container,
    CssBaseline,
    Link,
    Toolbar,
    Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { THEME } from '../theme';
import ToggleSwitch from './ToggleSwitch';

interface HeaderProps {
    settheme: React.Dispatch<React.SetStateAction<THEME>>;
}

const Header: React.FC<HeaderProps> = ({ settheme }) => {
    const [themeSwitch, setThemeSwitch] = useState(true);
    const handleChangeTheme = (e: boolean): void => {
        const THEME = { DARK: 'DARK', LIGHT: 'LIGHT' };
        const isCheck = e;
        const theme = (isCheck === true ? THEME.DARK : THEME.LIGHT) as THEME;
        settheme(theme);
        setThemeSwitch(isCheck);
    };

    return (
        <>
            <CssBaseline />
            <AppBar sx={{ borderBottom: '1px solid #1e1e1e' }} position="fixed">
                <Container maxWidth="lg">
                    <Toolbar sx={{ width: '100%', padding: '0 0 !important', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <Box sx={{ width: '33%', minHeight: 'inherit', display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Typography sx={{ float: 'left' , display: 'flex', alignItems: 'center', cursor: 'pointer' }} variant="h6" fontWeight="bold">
                                <ArrowBackIosIcon /><ArrowForwardIosIcon /> Theeraprasert MEEMUI
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, alignItems: 'center', width: { xs: '66%', md: '33%' }, minHeight: 'inherit' }}>
                            <Link sx={{ mx: { xs: 1, md: 2 } }} href="https://cv.tubstory.com" target="_blank" rel="noopener noreferrer" color="inherit" underline="none">
                                <Typography sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} variant="body2" fontWeight="bold">
                                    <StickyNote2Icon />
                                    Resume
                                </Typography>
                            </Link>
                            <Link sx={{ mx: { xs: 1, md: 2 } }} href="mailto:theeraprasert@tubstory.com" color="inherit" underline="none">
                                <Typography sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} variant="body2" fontWeight="bold">
                                    <PermContactCalendarIcon />
                                    Contact me
                                </Typography>
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '33%', minHeight: 'inherit' }}>
                            <ToggleSwitch checked={themeSwitch} onChange={handleChangeTheme} />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
