import React from "react";
import { useState } from "react";
// import data from "/Users/pauline/Documents/challenges/React/haiku/src/wordsapi_sample.json";
import data from "../wordsapi_sample.json";

const Generator = () => {
  const [haiku, setHaiku] = React.useState([]);

  const adjective = {
    1: [
      "surd",
      "sure",
      "svelte",
      "swank",
      "swart",
      "swarth",
      "sweer",
      "swell",
      "swept",
      "swish",
    ],
  };

  const noun = {
    1: [
      "time",
      "year",
      "way",
      "day",
      "thing",
      "man",
      "world",
      "life",
      "hand",
      "part",
      "child",
      "eye",
      "place",
      "work",
      "week",
      "case",
      "point",
      "group",
      "fact",
      "adze",
      "aid",
      "aide",
      "aides",
      "aids",
      "ail",
      "aim",
      "aims",
      "cess",
      "chair",
      "chairs",
      "chaise",
      "chalk",
      "chalks",
      "champ",
      "champs",
      "chance",
      "chant",
      "chants",
      "chap",
      "chards",
      "chark",
      "charks",
      "charm",
    ],
    2: ["person", "woman", "number", "problem"],
    3: ["company", "government"],
  };

  const verb1 = [
    "have",
    "do",
    "say",
    "get",
    "make",
    "go",
    "know",
    "take",
    "see",
    "come",
    "think",
    "look",
    "want",
    "give",
    "use",
    "find",
    "tell",
    "ask",
    "work",
    "seem",
    "feel",
    "try",
    "leave",
    "call",
  ];

  const verb2 = [
    "jogging",
    "joking",
    "jollied",
    "jostle",
    "jostles",
    "jotted",
    "jounces",
    "jouncing",
    "journey",
    "journeys",
    "joypop",
    "joypops",
    "judder",
    "judders",
    "judging",
    "jugging",
    "juggle",
    "juggles",
  ];

  const adverb1 = [
    "there",
    "thick",
    "thin",
    "this",
    "though",
    "thrice",
    "through",
    "thru",
    "thus",
    "tight",
    "ton",
    "too",
    "tough",
    "trim",
  ];

  function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleHaiku() {
    const filteredData = Object.entries(data)
      .filter((entry) => {
        let keepEntry = true;
        // If entry contains syllables, keep it
        keepEntry &&= entry[1].syllables != null;
        // Check whether definitions exist
        keepEntry &&= entry[1].definitions != null;
        // Check whether definitions has entries
        keepEntry &&= entry[1].definitions.length > 0;
        // Also check partOfSpeech
        keepEntry &&= entry[1].definitions[0].partOfSpeech != null;
        return keepEntry;
      })
      .map((entry) => ({
        word: entry[0],
        information: entry[1],
      }));
    console.log(filteredData);

    // const keys = Object.keys(data);
    // const randomKey = getRandomItemFromArray(keys);
    // const randomItem = data[randomKey];
    // console.log(randomKey, randomItem);

    const firstLine = [];
    const reg = /\,/g;
    let index1 = Math.floor(Math.random() * adjective[1].length);
    firstLine.push(adjective[1][index1]);

    let index2 = Math.floor(Math.random() * noun[1].length);
    firstLine.push(noun[1][index2]);

    let index3 = Math.floor(Math.random() * verb2.length);
    firstLine.push(verb2[index3]);

    let index4 = Math.floor(Math.random() * adverb1.length);
    firstLine.push(adverb1[index4]);

    let firstLineString = firstLine.toString(" ").replace(reg, " ");
    let firstLineStringCap =
      firstLineString.charAt(0).toUpperCase() + firstLineString.slice(1);

    const secondLine = [];
    let index5 = Math.floor(Math.random() * adjective[1].length);
    secondLine.push(adjective[1][index5]);

    let index6 = Math.floor(Math.random() * noun[3].length);
    secondLine.push(noun[3][index6]);

    let index7 = Math.floor(Math.random() * verb2.length);
    secondLine.push(verb1[index7]);

    let index8 = Math.floor(Math.random() * adverb1.length);
    secondLine.push(adverb1[index8]);

    let secondLineString = secondLine.toString(" ").replace(reg, " ");
    let secondLineStringCap =
      secondLineString.charAt(0).toUpperCase() + secondLineString.slice(1);

    const thirdLine = [];

    let index9 = Math.floor(Math.random() * adjective[1].length);
    thirdLine.push(adjective[1][index9]);

    let index10 = Math.floor(Math.random() * noun[1].length);
    thirdLine.push(noun[1][index10]);

    let index11 = Math.floor(Math.random() * verb2.length);
    thirdLine.push(verb1[index11]);
    let index12 = Math.floor(Math.random() * noun[1].length);
    thirdLine.push(noun[1][index12]);

    let thirdLineString = thirdLine.toString(" ").replace(reg, " ");
    let thirdLineStringCap =
      thirdLineString.charAt(0).toUpperCase() + thirdLineString.slice(1);

    let finalHaiku = [
      firstLineStringCap,
      secondLineStringCap,
      thirdLineStringCap,
    ];

    setHaiku(finalHaiku);
  }

  return (
    <div>
      <p>{haiku[0]}</p>
      <p>{haiku[1]}</p>
      <p>{haiku[2]}</p>
      <button
        className="
     buttonHaiku "
        onClick={handleHaiku}
      >
        Generate a Haiku
      </button>
    </div>
  );
};

export default Generator;
