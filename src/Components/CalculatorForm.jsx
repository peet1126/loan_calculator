import React from 'react';

class CalculatorForm extends React.Component {
   
   handleChange = (event) => {
       this.props.onFormChange(event);
   }

   handleSubmit = (event) => {
       this.props.onFormSubmit(event);
   }

    render () {
        const {amount, months, ltv, repayment} = this.props;

        // Conditional rendering of the loan amount error
        let error;
        if (amount !== "") {
            if (amount >= 5000 && amount < 25000000) {
                error = null;
            } else {
                error = <span className="input-error">Loan Amount must be between $5,000.00 and $25,000,000.00</span>;
            }

        }

        return (
            <div className="calculator-form">
                <div className="loan-calculator-layout">
                <form onSubmit={this.handleSubmit} action="" className="form-field" autoComplete="off">
                    <div className="form" id="form-amount">
                        <label htmlFor="amount">
                        <span>How much do you want to borrow?</span>
                        <div className="input-container">
                            <i class="fa fa-usd icon"></i>
                            <input type="number" value={amount} onChange={this.handleChange} name="amount" id="amount" placeholder="" pattern="\d*" step="1" min="5000" max="25000000" required/>
                        </div>
                        {error}
                        </label>
                    </div>
                    <div className="form" id="form-months">
                        <label htmlFor="months">How long do you need to pay back?</label>
                        <input type="range" value={months} onChange={this.handleChange} name="months" id="months" step="1" min="3" max="36"required/>
                        <div id="bubble-div">
                            <span className="bubble">{months} months</span>
                        </div>
                    </div>
                    <div className="form" id="form-ltv">
                        <label htmlFor="ltv">Loan-to-Value (LTV)</label>
                        <div onChange={this.handlerRadioChange} className="radio-div ltv">
                            <label className={ltv === '30' ? 'is-active' : ''}><input type="radio" onChange={this.handleChange} checked={ltv === "30"} value="30" id="ltv" />30%</label>
                            <label className={ltv === '40' ? 'is-active' : ''}><input type="radio" onChange={this.handleChange} checked={ltv === "40"} value="40" id="ltv" />40%</label>
                            <label className={ltv === '50' ? 'is-active' : ''}><input type="radio" onChange={this.handleChange} checked={ltv === "50"} value="50" id="ltv" />50%</label>
                            <label className={ltv === '60' ? 'is-active' : ''}><input type="radio" onChange={this.handleChange} checked={ltv === "60"} value="60" id="ltv" />60%</label>
                            <label className={ltv === '70' ? 'is-active' : ''}><input type="radio" onChange={this.handleChange} checked={ltv === "70"} value="70" id="ltv" />70%</label>
                        </div>
                    </div>
                    <div className="form" id="form-repayment">
                        <label htmlFor="repayment">Repayment Option</label>
                        <div className="radio-div repayment">
                            <label className={repayment === 'Interest Only' ? 'is-active' : ''} ><input type="radio" onChange={this.handleChange} checked={repayment === "Interest Only"} value="Interest Only" name="repayment" id="repayment" required/>Interest Only</label>
                            <label className={repayment === 'Principal & Interest' ? 'is-active' : ''} ><input type="radio" onChange={this.handleChange} checked={repayment === "Principal & Interest"} value="Principal & Interest" name="repayment" id="repayment" required/>Principal & Interest</label>
                        </div>    
                    </div>
                </form>
                </div>
            </div>
        )
    }
};

export default CalculatorForm;
