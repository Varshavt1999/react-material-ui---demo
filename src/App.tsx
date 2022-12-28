import './App.css';
import { MuiButton } from './components/MuiButton';
import { MuiButtonGroup } from './components/MuiButtonGroup';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiSelect } from './components/MuiSelect';
import { MuiTextField } from './components/MuiTextField';
import { MuiToggleButton } from './components/MuiToggleButton';
import { MuiTypography } from './components/MuiTypography';



function App() {
  
  return (
    <div className="App">
      <MuiTypography/>
      ===================================================================================================
      <MuiButton/>
      ===================================================================================================
      <MuiButtonGroup/>
      ===================================================================================================
      <MuiToggleButton/>
      ===================================================================================================
      <MuiTextField />
      ===================================================================================================
      <MuiSelect />
      ===================================================================================================
      <MuiRadioButton/>
    </div>
  );
}

export default App;
 