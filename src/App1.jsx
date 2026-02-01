
// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function App() {
  let handleClick=()=>{
    console.log("Button was Clicked!");
  }

  return ( 
    <>
     <h1>Material UI Demo</h1>
     <Button variant="contained"onClick={handleClick} color='error'>Click Me!</Button>
     <Button variant="contained"onClick={handleClick} disabled size='small'>Click Me2!</Button>
     <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
    </Button>

     <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>

    </>
  )
}

export default App;
