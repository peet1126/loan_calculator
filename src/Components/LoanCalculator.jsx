import React from 'react';
import '../Styles/LoanCalculator.css';
import CalculatorDetails from './CalculatorDetails';
import CalculatorForm from './CalculatorForm';


class LoanCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            amount: "",
            months: 12,
            ltv: '60',
            repayment: 'Interest Only'
        })
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleFromSubmit = (event) => {
        event.preventDefault();
    }

    render () {
        const {amount, months, ltv, repayment} = this.state;
        return (
            <div className="loan-calculator">
                <h1>Loan Calculator</h1>
                <section className="calculator">
                    <CalculatorForm 
                        amount={amount} 
                        months={months} 
                        ltv={ltv} 
                        repayment={repayment} 
                        onFormChange={this.handleFormChange} 
                        onFormSubmit={this.handleFromSubmit} 
                    />
                    <CalculatorDetails 
                        amount={amount} 
                        months={months} 
                        ltv={ltv} 
                        repayment={repayment} 
                        onFormChange={this.handleFormChange} 
                    />
                </section>
            </div>
        )
    }
};

export default LoanCalculator;