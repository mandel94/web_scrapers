// import './App.css';
import { Button } from '@mui/base/Button';
import { Input } from '@mui/base/Input';


function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">
        Named entity Recognition
      </h1>
      <div className='ner-tool'>
        <Input defaultValue={""}
          name='text'
          placeholder='My name is Clara and I live in Berkeley, California.'
          type='text'
          display='block'></Input>
        <Button>Compute</Button>
      </div>
    </div>
  );
}

export default App;
