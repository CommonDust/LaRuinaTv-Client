import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIdYT, getInfo } from '../../middlewares/redux/actions'
import { Link } from 'react-router-dom'
import Player from './Player'

const View = () => {
    const dispatch = useDispatch()
    const {id}= useParams()
    const infoDetailViewer = useSelector(state =>state.infoDetailViewer)
    const idYT = useSelector(state=>state.ytPlayerState)
    useEffect(()=>{
        dispatch(getInfo(id))
    },[dispatch, id])

    // useEffect(()=>{
    //     setType(typeMediaList[dispatch(getMediaType(typeMedia)).payload])
    // },[dispatch, typeMediaList, typeMedia])

    return (
        <div>
            <div className='visor'>
                <div className='visorBGCanvas'>
                    <img className='visorBG' src={infoDetailViewer.linkimg} alt='' />
                </div>
                <div className='visorCanvas'></div>
                <div className='visorPostInfo'>
                    <div className='visorPostArtista'>
                        <p>{infoDetailViewer.artist}</p>
                    </div>
                    <div className='visorPostTitulo' id='viewPostTitulo'>
                    <p>{infoDetailViewer.title}</p>
                    <div className='visorInfo'>
                        <h3>{infoDetailViewer.info}</h3>
                    </div>
                    <div className='viewMediaTypesCont'>
                        <ul className='viewMediaTypesList'>
                            {/* {
                                Object.entries(type).map((el)=>{
                                    return(
                                    el.map((e)=>{
                                    return(
                                        <li className='viewLiImg' key={e}><a href={`${e.url}${mediaLink}`}><img className='viewLiIcon' src={e.img} alt="" /></a></li>
                                        )
                                    }))
                                })
                            } */}
                        </ul>
                        <Player idYT={idYT} />
                        {infoDetailViewer?
                        
                        <button onClick={()=>{
                            return (
                            dispatch(getIdYT(infoDetailViewer.idLinkYT)),
                            document.querySelector('.playerCont').style.opacity='1',
                            document.querySelector('.playerLi').style.scale='1',
                            document.querySelector('.playUl').style.scale='1'
                            )}}
                            className='buttonVer'>Ver ahora</button>
                        : null
                        }
                        <Link to='/browser'><button className='buttonVolver'>Volver al inicio</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View