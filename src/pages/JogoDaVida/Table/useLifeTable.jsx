import { useState, useEffect } from 'react';
import getCoordinates from '../../../utils/getCoordinates';

export default function useLifeTable(playState, defaultSize) {
  const [table, setTable] = useState([]);
  const [timer, setTimer] = useState(2000)
  const [actives, setActives] = useState(['1-1', '1-2', '1-3']);

  function nextGeneration() {
    let activesClone = [...actives]; // copy the active cells array

    let allEmpties = [];

    for (let ln in actives) {
      if (actives[ln] === undefined) continue;
      // loop and verify each active cell
      let [neighbors, empties] = getNeighbors(...actives[ln].split('-')); // get coordinates from cell

      allEmpties.push(...empties); // add empty cells to verify if it will become alive

      if (activesClone[ln] && (neighbors <= 1 || neighbors >= 4)) {
        // kill cell by solitude or by overcrowd
        delete activesClone[ln];
      }
    }

    for (let ln in allEmpties) {
      let [neighbors] = getNeighbors(...allEmpties[ln].split('-'));

      if (neighbors === 3 && activesClone.indexOf(allEmpties[ln]) === -1) {
        let emptySlot = activesClone.indexOf(undefined);
        if (emptySlot !== -1) activesClone[emptySlot] = allEmpties[ln];
        else activesClone.push(allEmpties[ln]);
      }
    }
    // console.log(activesClone);
    setActives(() => activesClone);
  }

  function getNeighbors(line, column) {
    line = parseInt(line);
    column = parseInt(column);

    let empties = [];
    let count = 0;
    let positions = [
      /* TOP */
      [line - 1, column - 1],
      [line - 1, column],
      [line - 1, column + 1],

      /* MID */
      [line, column - 1],
      // [line, column],
      [line, column + 1],

      /* BOTTOM */
      [line + 1, column - 1],
      [line + 1, column],
      [line + 1, column + 1],
    ];

    for (let c in positions) {
      let [line, column] = positions[c];
      if (table[line] && table[line][column]) count++;
      else if (line !== undefined && column !== undefined) {
        empties.push(line + '-' + column);
      }
    }

    return [count, empties];
  }

  useEffect(() => {
    // render the table
    let tableCopy = [];
    for (let ln = 0; ln < defaultSize; ln++) {
      let line = [];
      for (let col = 0; col < defaultSize; col++) {
        line.push(actives.includes(getCoordinates(ln, col)) ? true : false);
      }
      tableCopy.push(line);
    }
    setTable(() => tableCopy);
  }, [defaultSize, actives]);

  useEffect(() => {
    let nextGenInterval;

    if (playState) {
      // Set interval to jump to next generation periodically
      nextGenInterval = setInterval(nextGeneration, timer);
    } else {
      // Clear interval if playState is false
      clearInterval(nextGenInterval);
    }

    // Clean up the interval on component unmount
    return () => clearInterval(nextGenInterval);
  }, [playState, nextGeneration, timer]);

  return [table, setActives, nextGeneration, setTimer];
}
