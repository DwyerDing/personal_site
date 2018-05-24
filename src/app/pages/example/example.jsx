import React from "react";

const moneyType = {
    d: 'dollar',
    y: 'yuan'
}

function Surprise(props) {
    if (props.num >= 5) {
        return <p>Rich.</p>;
    }
    return <p>Poor.</p>;
}

export class Example extends React.Component {
    constructor(props) {
        super(props);
        this.handleDollarChange = this.handleDollarChange.bind(this);
        this.handleYuanChange = this.handleYuanChange.bind(this);
        this.state = {
            money: '',
            type: 'd'
        };
    }

    handleDollarChange(money) {
        this.setState({
            type: 'd',
            money
        });
    }

    handleYuanChange(money) {
        this.setState({
            type: 'y',
            money
        });
    }

    tryConvert(money, convert) {
        const input = parseFloat(money);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    toDollar(yuan) {
        return yuan * 0.1582;
    }

    toYuan(dollar) {
        return dollar * 6.323;
    }


    render() {
        const type = this.state.type,
            money = this.state.money,
            dollar = type === 'd' ? this.tryConvert(money, this.toDollar) : money,
            yuan = type === 'y' ? this.tryConvert(money, this.toYuan) : money;
        return (
            <div>
              <h1>React Example</h1>
              <MoneyInput type="d" money={ dollar } moneyTransfer={ this.handleYuanChange.bind(this) } />
              <MoneyInput type="y" money={ yuan } moneyTransfer={ this.handleDollarChange.bind(this) } />
              <Surprise num={ dollar } />
            </div>
        )
    }
}

class MoneyInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.moneyTransfer(e.target.value);
    }

    render() {
        const money = this.props.money,
            type = this.props.type;
        return (
            <div>
              <h1>Enter money in
                                                                                                                                                    { moneyType[type] }:</h1>
              <input value={ money } onChange={ this.handleChange.bind(this) } />
            </div>
        )
    }
}