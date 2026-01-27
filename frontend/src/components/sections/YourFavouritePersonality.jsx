import React, { memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import PersonalityCard from "../cards/PersonalityCard";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const YourFavouritePersonality = memo((props) => {
  const { t } = useTranslation();
  const title = t(props.title) || t("sectionTitle.your_favourite_personality")
  const [personality] = useState(props.data || [

    {
      image: generateImgPath("/assets/images/cast/olivia-foster.webp"),
      title: "favouritePersonalities.olivia_foster",
      category: "persondesc.actress",
    },
    {
      image: generateImgPath("/assets/images/cast/leena-burton.webp"),
      title: "favouritePersonalities.Leena_Burton",
      category: "persondesc.actress",
    },
     {
      image: generateImgPath("/assets/images/cast/ryan-pierce.webp"),
      title: "favouritePersonalities.Ryan_Pierce",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/michael-fox.webp"),
      title: "favouritePersonalities.michael_fox",
      category: "persondesc.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/ruby-scott.webp"),
      title: "favouritePersonalities.ruby_scott",
      category: "persondesc.director",
    },
    {
      image: generateImgPath("/assets/images/cast/maxwell-carter.webp"),
      title: "favouritePersonalities.maxwell_carter",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/mark-smith.webp"),
      title: "favouritePersonalities.mark_smith",
      category: "persondesc.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/ava-monroe.webp"),
      title: "favouritePersonalities.ava_monroe",
      category: "persondesc.producer",
    },
    {
      image: generateImgPath("/assets/images/cast/jack-nicholson.webp"),
      title: "favouritePersonalities.jack_nicholson",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/charles-melton.webp"),
      title: "favouritePersonalities.charles_melton",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/jeff-bridges.webp"),
      title: "favouritePersonalities.jeff_bridges",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/james-stewart.webp"),
      title: "favouritePersonalities.james_stewart",
      category: "persondesc.actor",
    },
    {
      image: generateImgPath("/assets/images/cast/jordan-grant.webp"),
      title: "favouritePersonalities.jordan_grant",
      category: "persondesc.actor",
    },
    
  ]);

  const loops = props.loop !== undefined ? props.loop : true

  return (
    <Fragment>
      <div className="favourite-person-block">
      <SectionSlider
        title={t(title)}
        list={personality}
        className="streamit-block"
        slidesPerView={props.slidePerView || 11}
        link="/cast-view-all"
        slideMedium={4}
        paddingY={props.paddingY}
        speed={1500}
        loop={loops}
        viewAll={props.viewAll || false}
      >
        {(data) => (
          <PersonalityCard
            image={data.image}
            category={t(data.category)}
            title={t(data.title)}
            categoryLink="#"
            link="/cast-detail"
          />
        )}
      </SectionSlider>
      </div>
    </Fragment>
  );
});

YourFavouritePersonality.displayName = "YourFavouritePersonality";
export default YourFavouritePersonality;
