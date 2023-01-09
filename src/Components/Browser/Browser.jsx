import React, { useEffect } from 'react';
import s from "./css/Slider.module.css";
import Visor from './Visor';
import Footer from '../Utils/Footer';
import Slider from './Slider';
import { BodyCss } from '../../functions/BodyCss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategorias, getPosts, resetMedia, resetOption } from '../../middlewares/redux/actions';

const Browser = () => {
    BodyCss()
    const dispatch = useDispatch()
    const visorList = useSelector(state=>state.visorList)
    const listaCategorias = useSelector(state=>state.listaCategorias)
    const sliderCategoria = (categoria) => visorList.filter(e=>e.categoria.find(el=>el===categoria))
    useEffect(()=>{
        dispatch(resetOption())
        dispatch(resetMedia())
        dispatch(getPosts())
    },[dispatch])
    useEffect(()=>{
        dispatch(getCategorias(visorList))
    },[visorList, dispatch])
 
    let id = 0
    return (
        <div className='browserBody'>

{/* ---------------------VISOR--------------------- */} 
        <Visor/>

{/* --------------------SLIDERS-------------------- */}
    {   
        visorList?
            ([...new Set(listaCategorias)].map(e=>
            {
                if(id === 0){ id++; return <Slider titulo={'Contenido'} categoria={visorList} style={s} id={`s`}key={`s`}/>}
                else{id = e.id; return <Slider titulo={e} categoria={sliderCategoria(e)} style={s} id={`s${e.id}`} key={`s${e}`}/>}
            }
        )) : dispatch(getPosts())
    }

{/* ---------------------FOOTER--------------------- */}

        {visorList.length>1? <Footer/> : null}

        </div>
    )
}

export default Browser
