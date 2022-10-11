import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import {toast, } from 'react-toastify';
import { fabClasses } from '@mui/material';

function Navbar() {
        const token= useSelector<TokenState, TokenState["tokens"]>(
            (state)=> state.tokens
        );
        let navigate = useNavigate();
        const dispatch=useDispatch();

        function goLogout(){
            dispatch(addToken(''));
            toast.info('Usuario deslogado',{
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            })
            navigate('/login')
        }
        var navbarComponent;

        if (token !=" "){
            navbarComponent= <AppBar position="static" style={{ backgroundColor: 'black' }}>
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
        }

    return (
        <>
           {navbarComponent}
        </>
    )

}
export default Navbar;