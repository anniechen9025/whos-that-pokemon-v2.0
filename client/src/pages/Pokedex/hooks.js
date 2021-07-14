import { useEffect, useState, useMemo, useCallback } from 'react';
import API from '../../utils/API';

//export function usePokedexLogic() {
// function loadPokedex() {
//  API.getPokemon()
//   .then((res) => {
//   console.log(res.data);
//     const pokemon = res.data;
//   })
//    .catch((err) => console.log(err));
// }
// return { pokemon };
//}
