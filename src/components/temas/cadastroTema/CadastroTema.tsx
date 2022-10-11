import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


function CadastroTema() {
    let navigate = useNavigate();
    const{id}=useParams<{id: string}>();
    const token =useSelector<TokenState, TokenState['tokens']>(
        (state)=> state.tokens
    );
    const [temas, setTemas]= useState<Tema>({
        id: 0,
        descricao:''
    })

    useEffect(()=>{
        if(token ==""){
            toast.error('Você precisa estar logado',{
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            navigate('/login')
        }
    },[token])

    useEffect(()=>{
        if(id !== undefined){
            findById(id)
        }
    },[id])

    async function findById(id:string) {
        await buscaId(`/temas/${id}`,setTemas,{
            headers: {
                'Authorization': token
            }
        })}
       function updatedTema(e: ChangeEvent<HTMLInputElement>) {
            setTemas({
                ...temas,
                [e.target.name]: e.target.value,
            })
       }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("temas " + JSON.stringify(temas))

        if (id !== undefined) {
            console.log(temas)
            put(`/temas`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso',{
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        } else {
            post(`/temas`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com successo',{
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/temas')
    }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit ={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={temas.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;