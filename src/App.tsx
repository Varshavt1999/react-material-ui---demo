import './App.css';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiBox } from './components/MuiBox';
import { MuiButton } from './components/MuiButton';
import { MuiButtonGroup } from './components/MuiButtonGroup';
import { MuiCard } from './components/MuiCard';
import { MuiCheckBox } from './components/MuiCheckBox';
import { MuiGrid } from './components/MuiGrid';
import { MuiImageList } from './components/MuiImageList';
import { MuiPaper } from './components/MuiPaper';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiStack } from './components/MuiStack';
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
      ===================================================================================================
      <MuiAutocomplete />
      ===================================================================================================
      <MuiBox />
      ===================================================================================================
      <MuiStack />
      ===================================================================================================
      <MuiGrid />
      ===================================================================================================
      <MuiPaper />
      ===================================================================================================
      <MuiCard />
      ===================================================================================================
      <MuiAccordion />
      ===================================================================================================
      <MuiImageList />
    </div>
  );
}

export default App;
 