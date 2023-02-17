// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {bal: 2000}

  cashBtn = value => {
    this.setState(prevValue => ({
      bal: prevValue.bal - value,
    }))
  }

  render() {
    const {bal} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const index = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <p className="logo">{index}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="digit">
              {bal} <br /> <span className="rupees">In Rupees</span>
            </p>
          </div>
          <div className="withdraw-container">
            <p className="heading">Withdraw</p>
            <p className="para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="box-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  cash={eachItem}
                  cashBtn={this.cashBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
