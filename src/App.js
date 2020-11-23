import './App.css';
import Sidebar from 'components/sidebar/Sidebar';
import HomePage from 'components/pages/HomePage';
import {FileGridProvider} from 'context/FileGridContext'
import {FilteredGridProvider} from 'context/FilteredGridContext'
import {StatusContextProvider} from 'context/StatusContext'
import {useContext} from 'react'
function App() {
  return (
    <div className="App">
      <FilteredGridProvider>
        <FileGridProvider>
          <StatusContextProvider>
            <Sidebar />
            <HomePage />
          </StatusContextProvider>
        </FileGridProvider>
      </FilteredGridProvider>
    </div>
  );
}

export default App;
