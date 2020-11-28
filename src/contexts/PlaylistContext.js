/* eslint-disable default-case */
import React, { createContext, useContext, useReducer } from 'react'

const PlaylistContext = createContext({})

export function Provider ({children}) {
  const [favorites, setFavorites] = useState([])
  const [nonFavorites, setNonFavorites] = useState([])
  const [unFavorites, setUnFavorites] = useState([])
  return (
    <PlaylistContext.Provider value={{ favorites, setFavorites, nonFavorites, setNonFavorites, unFavorites, setUnFavorites}}>
      {children}
    </PlaylistContext.Provider>
  )
}

// const INITIAL_STATE = []

// const Constants = {
//   store: "favorites",
//   types: {
//     favorite: 'favorite',
//     nonFavorite: 'nonFavorite',
//     unFavorite: 'unFavorite'
//   }
// }

export function usePlaylist () {
  const { favorites, setFavorites, nonFavorites, setNonFavorites, unFavorites, setUnFavorites } = useContext(PlaylistContext)

  const handleAddToFavorite = () => {
    return setFavorites([...favorites])
  }
}