import { GetDataAsync } from './Components/GetDataAsync';
import { GetDataPromise } from './Components/GetDataPromise';
import { GetDataMix } from './Components/GetDataMix';
import { GetDataAwait } from './Components/GetDataAwait';
import { SetDataThen } from './Components/SetDataThen';
import { SetDataAsyncAuto } from './Components/SetDataAsyncAuto';
import { SetDataAsync } from './Components/SetDataAsync';

import './App.css'

function App() {
  return (
    <main>
      <GetDataAsync />
      <GetDataPromise />
      <GetDataMix />
      <GetDataAwait />
      <SetDataThen />
      <SetDataAsyncAuto />
      <SetDataAsync />
    </main>
  ) 
}

export default App
