import React from "react";
import { useState } from "react";
// import data from "/Users/pauline/Documents/challenges/React/haiku/src/wordsapi_sample.json";
import data from "../wordsapi_sample.json";

const Generator = () => {
  const [haiku, setHaiku] = React.useState([]);

  /*  function getRandomItemFromArray(array) {
    console.log(array[Math.floor(Math.random() * array.length)]);
  } */

  function handleHaiku() {
    let firstLineStringCap;
    const reg = /\,/g;

    const ADJfilteredData = Object.entries(data)
      .filter((entry) => {
        let keepEntry = true;
        // If entry contains syllables, keep it
        keepEntry &&= entry[1].syllables != null;
        // Check whether definitions exist
        keepEntry &&= entry[1].definitions != null;
        // Check whether definitions has entries
        keepEntry &&= entry[1].definitions.length > 0;
        // Also check partOfSpeech
        keepEntry &&= entry[1].definitions[0].partOfSpeech === "adjective";
        return keepEntry;
      })
      .map((entry) => ({
        word: entry[0],
        information: entry[1],
      }));
    console.log(ADJfilteredData);

    const NounFilteredData = Object.entries(data)
      .filter((entry) => {
        let keepEntry = true;
        // If entry contains syllables, keep it
        keepEntry &&= entry[1].syllables != null;
        // Check whether definitions exist
        keepEntry &&= entry[1].definitions != null;
        // Check whether definitions has entries
        keepEntry &&= entry[1].definitions.length > 0;
        // Also check partOfSpeech
        keepEntry &&= entry[1].definitions[0].partOfSpeech === "noun";
        return keepEntry;
      })
      .map((entry) => ({
        word: entry[0],
        information: entry[1],
      }));
    console.log(ADJfilteredData);

    // const keys = Object.keys(data);
    // const randomKey = getRandomItemFromArray(keys);
    // const randomItem = data[randomKey];
    // console.log(randomKey, randomItem);

    let firstLine = [];
    let firstWord;
    let secondWord;

    function getRandomItemFirstWord(array) {
      firstWord = array[Math.floor(Math.random() * array.length)];
      console.log(firstWord.information.syllables.count);
      firstLine.push(firstWord.word);

      if (firstWord.information.syllables.count === 1) {
        NounFilteredData.filter(
          (word) => word.information.syllables.count === 4
        );
        secondWord =
          NounFilteredData[Math.floor(Math.random() * NounFilteredData.length)];
        firstLine.push(secondWord.word);
        console.log(secondWord.information.syllables.count);
      } else if (firstWord.information.syllables.count === 2) {
        NounFilteredData.filter(
          (word) => word.information.syllables.count === 3
        );
        secondWord =
          NounFilteredData[Math.floor(Math.random() * NounFilteredData.length)];
        firstLine.push(secondWord.word);
        console.log(secondWord.information.syllables.count);
      } else if (firstWord.information.syllables.count === 3) {
        NounFilteredData.filter(
          (word) => word.information.syllables.count === 2
        );
        secondWord =
          NounFilteredData[Math.floor(Math.random() * NounFilteredData.length)];
        firstLine.push(secondWord.word);
        console.log(secondWord.information.syllables.count);
      } else if (firstWord.information.syllables.count === 4) {
        NounFilteredData.filter(
          (word) => word.information.syllables.count === 1
        );
        secondWord =
          NounFilteredData[Math.floor(Math.random() * NounFilteredData.length)];
        firstLine.push(secondWord.word);
        console.log(secondWord.information.syllables.count);
      }
      let firstLineString = firstLine.toString(" ").replace(reg, " ");
      firstLineStringCap =
        firstLineString.charAt(0).toUpperCase() + firstLineString.slice(1);
      console.log(firstLineStringCap);
    }

    getRandomItemFirstWord(ADJfilteredData);

    let finalHaiku = [firstLineStringCap];

    setHaiku(finalHaiku);
  }

  return (
    <div>
      <p>{haiku[0]}</p>

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
