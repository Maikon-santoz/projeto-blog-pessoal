import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {
        const[token,setToken]=useLocalStorage('token');
        let navigate = useNavigate();

        function goLogout(){
            setToken('')
            alert('Usuario deslogado')
            navigate('/login')
        }
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar variant="dense">
                    <Box  className='cursor' >
                        <Typography variant="h5" color="inherit" className='teste-de-letra'>
                            <img src="https://img.icons8.com/color/480/berserk.png" alt="foto" className='logo' />
                            
                        </Typography>
                    </Box>
                    <Grid container justifyContent='flex-end' className='topo'>
                    <Box display="flex" justifyContent="flex-end">
                     <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit" className='teste-de-letra'>
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/posts'className='text-decorator-none'>
                        <Box mx={1}  className='cursor'>
                            <Typography variant="h6" color="inherit" className='teste-de-letra'>
                                postagens
                            </Typography>
                        </Box>
                     </Link>
                     <Link to='/temas'className='text-decorator-none'>   
                        <Box mx={1}  className='cursor'>
                            <Typography variant="h6" color="inherit"className='teste-de-letra' >
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioTema'className='text-decorator-none'>
                        <Box mx={1}  className='cursor'>
                            <Typography variant="h6" color="inherit" className='teste-de-letra'>
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>

                        
                            <Box mx={1}  className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        
                        
                    </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )

}
export default Navbar;
