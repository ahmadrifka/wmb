import React from 'react';
import './Customers.css'
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography, Container,Stepper,Step,StepLabel, Button} from '@material-ui/core';
import InputForm from './module/InputForm';
import Order from '../Order/Order';
import MenuOrder from '../Menu/MenuOrder';
import TableOrder from '../Table/TableOrder';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
  
  function getSteps() {
    return ['Booking', 'Select Table' ,'Order Meals', 'Invoice'];
  }

  
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <InputForm />;
      case 1:
        return <TableOrder/>;
      case 2:
        return <MenuOrder/>;

      default:
        return <Order/>;
    }
  }

//MAIN FUNCTION
function Customers () {
    const classes = useStyles();

    
      const [activeStep, setActiveStep] = React.useState(0);
      const steps = getSteps();
    
      const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
      

    return(
        <div>
            <h1 style={{color: 'white'}}>WELCOME TO WARUNG MAKAN BAHARI</h1>
            <Container>
            <Paper className={classes.root} style={{widht:'500px', height:'auto'}}>
            
             <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

                
                
        <div className="btnbreadcrumb">
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (


            <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className='btn'> 



              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
            </Paper>
            </Container>
        </div>
    )
}




export default Customers;