// import './App.css';
import Button from '@/app/components/CustomButton/CustomButton';
import TextField from '@mui/material/TextField';

const NamedEntityRecognition = () => {

    const NerTask = (e: any) => {
        console.log('NerTask');
    }


    return (
        <div className='ner-form'>
            <TextField id="ner-input" label="Ner-input" variant="standard" />
            <Button role='primary' onClick={(e) => NerTask(e)}>Compute</Button>
        </div>
    );
}

export default NamedEntityRecognition;
