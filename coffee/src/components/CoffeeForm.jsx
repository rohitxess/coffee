import { use, useState } from 'react';
import { coffeeOptions} from '../utils';
import Authentication from './Authentication';
import Modal from './Modal';

export default function CoffeeForm(props) {
    const { isAuthenticated }  = props;
    const [ selectedCoffee, setSelectedCoffee] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ showCoffeeTypes, setShowCoffeeTypes ] = useState(false); // when the user clicks on the other button, we decide if we want to show other options or not!
    const [ coffeeCost, setCoffeeCost] = useState(0); 
    const [ hour, setHour ] = useState(0);
    const [ min, setMin ] = useState(0);

    //handlesubmitform 
    
    function handleSubmitForm() {
        if(!isAuthenticated){
            setShowModal(true)
            return 
        }

        console.log(selectedCoffee , coffeeCost, hour, min )
    }
    
    return (
        <>

          { showModal && (  <Modal handleCloseModal={() => {setShowModal(false)}}>
                <Authentication />
            </Modal>)}
            <div className="section-header">
                <i className="fa-solid fa-pencil"></i>
                <h2>Start tracking today</h2>
            </div>
            <h4>Select Coffee Type</h4>
            <div className="coffee-grid">
                {coffeeOptions.slice(0,5).map((option, optionIndex) => {
                    return (
                        <button onClick={() => {
                            setShowCoffeeTypes(false)
                            setSelectedCoffee(option.name)
                        }} className={'button-card ' + (option.name === selectedCoffee ? 'coffee-button-selected' : '')} key={optionIndex}>
                            <h4>{option.name}</h4>
                            <p>{option.caffeine} mg</p>
                        </button>
                    )
                })}
                <button onClick={() => {
                    setShowCoffeeTypes(true)
                    setSelectedCoffee(null)
                }} className={'button-card ' + (showCoffeeTypes ? 'coffee-button-selected' : '')} >
                    <h4>Other</h4>
                    <p>n/a</p>
                </button>
            </div>

            {showCoffeeTypes && (
                <select onChange={(e) => {
                    setSelectedCoffee(e.target.value)
                }} id="coffee-list" name="coffee-list">
                    <option value={null}>Select type</option>
                    {coffeeOptions.map((option, optionIndex) => {
                        return (
                            <option value={option.name} key={optionIndex}>
                                {option.name} ({option.caffeine}mg)
                            </option>
                        )
                    })}
                </select>
            )}
                <h4>Add the cost ($)</h4>
                <input type="mumber" className='w-full' value={coffeeCost} placeholder='4.50' 
                onChange={(e) => {
                    setCoffeeCost(e.target.value)
                }}/>
                <h4>Time since consumption</h4>
                <div>
                    <div>
                        <h6>Hours</h6>
                        <select name="" id="hours-select"
                        onChange={(e) => {
                            setHour(e.target.value)
                        }}>
                            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((hour, hourIndex) => {
                                return (
                                    <option key={hourIndex} value={hour}>{hour}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                                
                <div>
                    <div>
                        <h6>Mins</h6>
                        <select name="" id="hours-select"
                        onChange={(e) => {
                            setMin(e.target.value)}}>
                            {[0,5,10,15,30,25].map((min, minIndex) => {
                                return (
                                    <option key={minIndex} value={min}>{min}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <button onClick={handleSubmitForm}>Add Entry</button>
        </>
    )
}


//problem statement 
/*
click of the select coffee type and if they are not authenticated then 
prompt them to sign up 

*/