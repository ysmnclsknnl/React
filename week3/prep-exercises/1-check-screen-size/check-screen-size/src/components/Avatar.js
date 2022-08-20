import React from "react";
import { useState, useEffect } from "react";
import { useWindowsSizeContext2 } from "../WindowsSizeContext2";
import { BigHead } from "@bigheads/core";

const getAvatar = (screenWidth) => {
  console.log(`screenwidth is ${screenWidth}`);
  const hats = ["none", "none2", "none3", "none4", "none5", "beanie", "turban"];
  const hatColors = ["white", "blue", "black", "green", "red"];
  const accessories = ["none", "roundGlasses", "tinyGlasses", "shades"];
  const clothings = [
    "naked",
    "shirt",
    "dressShirt",
    "vneck",
    "tankTop",
    "dress",
  ];

  const clothingColors = ["white", "blue", "black", "green", "red"];
  const graphics = ["none", "redwood", "gatsby", "vue", "react", "graphQL"];

  const getRandomProperty = (propertyArray) => {
    const randomIndex = Math.floor(Math.random() * propertyArray.length);
    console.log(
      `propertyArray is ${propertyArray}, ${propertyArray[randomIndex]}`
    );
    return propertyArray[randomIndex];
  };

  const randomAvatarFeatures = {
    hat: getRandomProperty(hats),
    hatColor: getRandomProperty(hatColors),
    accessory: getRandomProperty(accessories),
    clothing: getRandomProperty(clothings),
    clothingColor: getRandomProperty(clothingColors),
    graphic: getRandomProperty(graphics),
  };

  const husnu = {
    avatarName: "husnu",
    body: "chest",
    circleColor: "blue",
    eyebrows: "angry",
    eyes: "wink",
    facialHair: "mediumBeard",
    hair: "short",
    hairColor: "black",
    lashes: "false",
    lipColor: "purple",
    mask: "true",
    faceMask: "true",
    mouth: "open",
    skinTone: "brown",
    ...randomAvatarFeatures,
  };

  const husniye = {
    avatarName: "husniye",
    body: "breasts",
    circleColor: "pink",
    eyebrows: "raised",
    eyes: "happy",
    facialHair: "none",
    hair: "afro",
    hairColor: "pink",
    lashes: "false",
    lipColor: "pink",
    mask: "true",
    faceMask: "true",
    mouth: "open",
    skinTone: "brown",
    ...randomAvatarFeatures,
  };
  const rifki = {
    avatarName: "rifki",
    body: "chest",
    circleColor: "pink",
    eyebrows: "raised",
    eyes: "happy",
    facialHair: "none",
    hair: "pixie",
    hairColor: "white",
    lashes: "true",
    lipColor: "green",
    mask: "true",
    faceMask: "true",
    mouth: "tongue",
    skinTone: "black",
    ...randomAvatarFeatures,
  };
  if (screenWidth > 1000) {
    return husnu;
  } else if (screenWidth < 1000 && screenWidth > 700) {
    return husniye;
  } else {
    return rifki;
  }
};

export const Avatar = () => {
  const [avatar, setAvatar] = useState(null);
  const { width } = useWindowsSizeContext2();
  useEffect(() => {
    setAvatar(getAvatar(width));
  }, [width]);

  if (avatar) {
    const {
      avatarName,
      body,
      circleColor,
      eyebrows,
      eyes,
      facialHair,
      hair,
      hairColor,
      lashes,
      lipColor,
      mask,
      faceMask,
      mouth,
      skinTone,
      accessory,
      hat,
      hatColor,
      clothing,
      clothingColor,
      graphic,
    } = avatar;
    return (
      <div className="medium">
        <p>{avatarName}</p>
        <BigHead
          accessory={accessory}
          body={body}
          circleColor={circleColor}
          clothing={clothing}
          clothingColor={clothingColor}
          eyebrows={eyebrows}
          eyes={eyes}
          facialHair={facialHair}
          graphic={graphic}
          hair={hair}
          hairColor={hairColor}
          hat={hat}
          hatColor={hatColor}
          lashes={lashes}
          lipColor={lipColor}
          mask={mask}
          faceMask={faceMask}
          mouth={mouth}
          skinTone={skinTone}
        />
      </div>
    );
  }
  return <div></div>;
};
