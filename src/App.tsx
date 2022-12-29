import './App.css';
import { MuiButton } from './components/MuiButton';
import { MuiButtonGroup } from './components/MuiButtonGroup';
import { MuiCheckBox } from './components/MuiCheckBox';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSwitch } from './components/MuiSwitch';
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
      ===================================================================================================
      <MuiCheckBox />
      ===================================================================================================
      <MuiSwitch />
      ===================================================================================================
      <MuiRating />
    </div>
  );
}

export default App;
 