import React from 'react';
import LoanCollateral from './LoanCollateral';

class CalculatorDetails extends React.Component {
    render () {

        const {amount, months, ltv, repayment} = this.props;

        // Calculations
        const apr = (Number(ltv) / 10) + 4;

        const monthlyInterestRate = (apr / 100) / 12;
    
        let monthlyPayment = (Number(amount) * monthlyInterestRate * (1 + monthlyInterestRate)** months) / ((1 + monthlyInterestRate)** months - 1);

        let totalInterest = ((monthlyPayment * months) - Number(amount));
        
        let totalLoanCost = Number(amount) + totalInterest;

        let interestOnly = totalInterest / months;

        let lastPayment = Number(amount) + interestOnly;

        // Formats numbers to round to the nearest hundredth decimal place and adds commas 
        const numberFormat = (number) => {
            let num = parseInt(number);
            num = Math.round(100 * number) / 100;
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        } 

        // ToDo - Write this in a cleaner way 
        const principal = numberFormat(amount);
        monthlyPayment = numberFormat(monthlyPayment);
        totalInterest = numberFormat(totalInterest);
        totalLoanCost = numberFormat(totalLoanCost);
        interestOnly = numberFormat(interestOnly);
        lastPayment = numberFormat(lastPayment);





        
        // Interest Only or Principal & Interest conditional rendering
        let payments = (repayment === "Interest Only" ? 
            <div>
                <span className="monthly-payment-amount">${interestOnly}</span>
                <h4 id="last-payment">Last Payment: ${lastPayment}</h4> 
            </div>
            :
            <span className="monthly-payment-amount">${monthlyPayment}</span>
        );

        return (
            <div className="calculator-details">
                <div className="calculator-layout">
                <div className="details-payment">
                    <h4 className="monthly-payment-label">Monthly Payment ({months} months)</h4>
                    {payments}
                </div>
                <div className="loan-stats-row">
                    <div className="loan-stats">
                        <h4>Loan Amount</h4>
                        <span>${principal}</span>
                    </div>
                    <div className="loan-stats">
                        <h4>APR</h4>
                        <span>{apr}%</span>
                    </div>
                </div>
                <div className="loan-stats-row">
                    <div className="loan-stats">
                        <h4>Total Loan Cost</h4>
                        <span>${totalLoanCost}</span>
                    </div>
                    <div className="loan-stats">
                        <h4>Interest</h4>
                        <span>${totalInterest}</span>
                    </div>
                </div>
                <LoanCollateral amount={amount} ltv={ltv} numberFormat={numberFormat} />
                </div>
                
            </div>
        )
    }
};

export default CalculatorDetails;