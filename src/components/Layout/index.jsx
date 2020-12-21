import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { modalContext } from './modalContext'

const Layout = ({ children }) => {
  const history = useHistory()
  const { state } = history.location

  const location = useLocation()
  const [prevLocation, setPrevLocaiton] = React.useState(location)

  const [isModal, setIsModal] = React.useState(false)

  React.useEffect(() => {
    const locationChanged = location !== prevLocation
    if (state?.modal && locationChanged) {
      setIsModal(true)
    }
  }, [state, location, prevLocation])

  React.useEffect(() => {
    setPrevLocaiton(location)
  }, [location])

  return (
    <div>
      <header>Memestagram</header>
      <main>
        <modalContext.Provider value={isModal}>
          {children}
        </modalContext.Provider>
      </main>
      <footer>by dobbydobby</footer>
    </div>
  )
}

export default Layout
