import React from 'react';




class LoanCollateral extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            BTC: 0,
            BCH: 0,
            DASH: 0,
            DOGE: 0,
            ETH: 0,
            LTC: 0,

        })
    }

    tokenCollateral = (pair) => {
        let token = (Number(this.props.amount) / (this.props.ltv / 100 )) / pair[1].USD;
        token = this.props.numberFormat(token);
        return(
            this.setState({
                 [pair[0]]: token
             })
       )         
    } 

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
            // To fetch data on another cryptocurrency add the crypto's symbol (exp. BTC) to the URL below and add the same symbol to the initial state. 
            const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,BCH,DOGE,LTC&tsyms=USD";
            fetch(url, {
              method: "GET"
            })
              .then(resp => resp.json())
              .then((data) => {
                  Object.entries(data).map((pair) => {
                    return this.tokenCollateral(pair);                
                  })
              })
              .catch(function(error) {
                console.log(error);
              });            
        }        
        
    }



    render () {
        const {amount, ltv} = this.props;
        // const {BTC, ETH, DASH, BCH, DOGE, LTC} = this.state;
        
        let tokens = Object.entries(this.state);

        let collateral = (Number(amount) / (ltv / 100));
        collateral =  this.props.numberFormat(collateral)

        let tokensNeeded = tokens.map(token => {
            let symbol = "/img/cryptocurrency-icons/32/black/" + token[0].toLowerCase() + ".png"
            return (
                <div className="crypto-amount" key={token[0]}>
                    <img src={symbol} alt="Bitcoin"/>
                    <span>{token[1]} {token[0]}</span>
                </div>                            
            )
        })

        return (
            <div className="loan-collateral">
                <h4 id="collateral-needed">Collateral Needed</h4>
                <span>${collateral} USD worth of:</span>
                <div className="crypto">
                    {tokensNeeded}
                </div>
            </div>
        )
    }
};

export default LoanCollateral;