import React from "react";
import playIconn from "../../design/ruinatv-icon-play-n.png";
import { Link } from "react-router-dom";

const Media = ({ cardList, style }) => {
  return (
    <div className={style.sliderItems}>
      <ul
        className={style.sliderListaItems}
        // id={`${key}ListaItems`}
      >
        {cardList
          ? cardList.map((e, i) => {
              return (
                <li value={e.id} key={i}>
                  <div className={style.sliderItem}>
                    <Link
                      to={`/view/v=${e.idLinkYT}=_type_=${e.mediaType}=_id_=${e.id}`}
                    >
                      <button
                        className={style.media}
                        style={{
                          backgroundImage: e.linkimg
                            ? `url(${e.linkimg})`
                            : "error",
                        }}
                        id={e.id}
                        urlid={e.urlID}
                        titulo={e.title}
                        artista={e.artist}
                        img={e.linkimg}
                        onClick={() => {
                          return window.scrollTo(0, 0);
                        }}
                      >
                        <img src={e.icon} alt="" className={style.logoItem} />
                      </button>
                    </Link>
                    <Link to={``} className={style.link}>
                      <p>
                        <img
                          className={style.sliderItemIconPlayN}
                          src={playIconn}
                          alt=""
                        />
                        {e.title}
                      </p>
                    </Link>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default Media;
