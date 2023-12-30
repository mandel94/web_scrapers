// import './App.css';
import { Button } from '@mui/base/Button';
import { Input } from '@mui/base/Input';


function NamedEntityRecognition() {
  return (
    <div className="ner-container">
      <h1 className="text-3xl font-bold ner-title">
        Named entity Recognition
      </h1>
      <div className='ner-form'>
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

export default NamedEntityRecognition;
