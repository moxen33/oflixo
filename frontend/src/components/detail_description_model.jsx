import React from "react";
import { generateImgPath } from "../StaticData/data";
import Detail_Descrition_Modal_Two from "./detail_description_model_two";
import Detail_Descrition_Modal_Three from "./detail_description_modal_three";

const Detail_Descrition_Modal = (props) => {
  const {
    isEpisodepage,
    istextureTitle,
    isCategory,
    isLanguage,
    movieDuration,
    movieName,
    year,
    views,
    ratingCount,
    show,
    modelClose
  } = props;
  return (
    <>
      {isEpisodepage === true ? (
        <Detail_Descrition_Modal_Two show={show} isEpisodepage = {isEpisodepage} istextureTitle={istextureTitle} isCategory={isCategory} isLanguage={isLanguage} movieDuration={movieDuration} movieName={movieName} year={year} views={views} ratingCount={ratingCount} modelClose={modelClose}/>
      ) : (
        <Detail_Descrition_Modal_Three show={show} isEpisodepage = {isEpisodepage} istextureTitle={istextureTitle} isCategory={isCategory} isLanguage={isLanguage} movieDuration={movieDuration} movieName={movieName} year={year} views={views} ratingCount={ratingCount} modelClose={modelClose}/>
      )}
    </>
  );
};

export default Detail_Descrition_Modal;
