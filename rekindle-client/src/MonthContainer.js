import React from "react";
import Month from "./Month";


class MonthContainer extends React.Component {

    constructor() {
        super()
        this.state = {
        months: [Date('2019-12-01'), Date('2019-11-01')]
        }
    }


    render() {
        return(
          <div>
          {this.state.months.map((month) => {
             return  <Month month={month} key={month}/>
             }
          )}
          </div>
        );
    }

}

export default MonthContainer