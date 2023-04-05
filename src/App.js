import {Component} from 'react'

import './App.css'

const genderList = [
  {
    id: 1,
    genderTxt: 'Male',
  },

  {
    id: 2,
    genderTxt: 'Female',
  },
  {
    id: 3,
    genderTxt: 'Others',
  },
]

const residenceList = [
  {
    id: 1,
    residenceTxt: 'Resident',
  },

  {
    id: 2,
    residenceTxt: 'Non-Resident',
  },
  {
    id: 3,
    residenceTxt: 'Resident but Not Ordinary Resident',
  },
]

const otherIncomeList = [
  {
    id: 1,
    incomeTxt: 'Interest Income (Savings Account, Fixed Deposits, etc.)',
  },

  {
    id: 2,
    incomeTxt: 'Dividend Income - Rental Income (other than House Property)',
  },
  {
    id: 3,
    incomeTxt: 'Income from Business / Profession',
  },
  {
    id: 4,
    incomeTxt: 'Agricultural Income',
  },
  {
    id: 5,
    incomeTxt: 'Other Miscellaneous Income',
  },
]

class App extends Component {
  state = {
    nameInput: '',
    inputAge: 0,
    basicSalaryInput: 0,
    HRAAndLTRInput: 0,
    allowancesInput: 0,
    annualRentInput: 0,
    municipalTaxesInput: 0,
    standardDeductionInput: 0,
    interestPaidInput: 0,
    shortTermCGInput: 0,
    longTermCGInput: 0,
    otherIncomeInput: 0,
    investmentExemptionInput: 0,
    otherExemptionInput: 0,
    otherIncomeLabelInput: otherIncomeList[0].incomeTxt,
    residentialInput: residenceList[0].residenceTxt,
    inputGender: genderList[1].genderTxt,
    clickBtnTxt: '',
    clickBtn: false,
    totalAnnualSalary: '',
    totalIncomeHouse: '',
    totalCapital: '',
    otherIncome: '',
    totalDeductions: '',
    clickOldTxt: '',
    clickOld: false,
  }

  onChangeName = e => {
    this.setState({nameInput: e.target.value})
  }

  onChangeAge = e => {
    this.setState({inputAge: e.target.value})
  }

  onChangeBasicSalary = e => {
    this.setState({basicSalaryInput: e.target.value})
  }

  onChangeHomeTravel = e => {
    this.setState({HRAAndLTRInput: e.target.value})
  }

  onChangeOtherAllowances = e => {
    this.setState({allowancesInput: e.target.value})
  }

  onChangeAnnualRent = e => {
    this.setState({annualRentInput: e.target.value})
  }

  onChangeMunicipalTaxes = e => {
    this.setState({municipalTaxesInput: e.target.value})
  }

  onChangeStandardDeduction = e => {
    this.setState({standardDeductionInput: e.target.value})
  }

  onChangeInterestPaid = e => {
    this.setState({interestPaidInput: e.target.value})
  }

  onChangeShortTermCG = e => {
    this.setState({shortTermCGInput: e.target.value})
  }

  onChangeLongTermCG = e => {
    this.setState({longTermCGInput: e.target.value})
  }

  onChangeIncome = e => {
    this.setState({otherIncomeInput: e.target.value})
  }

  onChangeInvestmentExemption = e => {
    this.setState({investmentExemptionInput: e.target.value})
  }

  onChangeOtherExemption = e => {
    this.setState({otherExemptionInput: e.target.value})
  }

  onChangeGender = e => {
    this.setState({inputGender: e.target.value})
  }

  onChangeResidence = e => {
    this.setState({residentialInput: e.target.value})
  }

  onChangeIncomeLabel = e => {
    this.setState({otherIncomeLabelInput: e.target.value})
  }

  onClickOldBtn = () => {
    const {
      basicSalaryInput,
      HRAAndLTRInput,
      allowancesInput,
      annualRentInput,
      municipalTaxesInput,
      standardDeductionInput,
      interestPaidInput,
      shortTermCGInput,
      longTermCGInput,
      otherIncomeInput,
      investmentExemptionInput,
      otherExemptionInput,
    } = this.state

    const salary =
      parseInt(basicSalaryInput) +
      parseInt(allowancesInput) -
      parseInt(HRAAndLTRInput)

    const houseIncome =
      parseInt(annualRentInput) +
      parseInt(municipalTaxesInput) +
      parseInt(interestPaidInput) -
      parseInt(standardDeductionInput)

    const CG = parseInt(shortTermCGInput) + parseInt(longTermCGInput)

    const deductions =
      parseInt(investmentExemptionInput) + parseInt(otherExemptionInput)

    const total =
      salary + houseIncome + CG + parseInt(otherIncomeInput) - deductions

    let amount = 0

    if (total <= 250000) {
      amount = total
    } else if (total >= 250000 && total <= 500000) {
      const val = total - 250000
      amount = 0.05 * val
    } else if (total > 500000 && total <= 1000000) {
      const val = total - 500000
      amount = 0.2 * val + 12500
    } else if (total > 1000000) {
      const val = total - 1000000
      amount = 0.3 * val + 112500
    }
    this.setState({
      clickBtn: false,
      clickBtnTxt: '',
      totalAnnualSalary: salary,
      totalIncomeHouse: houseIncome,
      totalCapital: CG,
      otherIncome: otherIncomeInput,
      totalDeductions: deductions,
      clickOldTxt: parseInt(amount),
      clickOld: true,
    })
  }

  onClickBtn = () => {
    const {
      basicSalaryInput,
      HRAAndLTRInput,
      allowancesInput,
      annualRentInput,
      municipalTaxesInput,
      standardDeductionInput,
      interestPaidInput,
      shortTermCGInput,
      longTermCGInput,
      otherIncomeInput,
      investmentExemptionInput,
      otherExemptionInput,
    } = this.state

    const salary =
      parseInt(basicSalaryInput) +
      parseInt(allowancesInput) -
      parseInt(HRAAndLTRInput)

    const houseIncome =
      parseInt(annualRentInput) +
      parseInt(municipalTaxesInput) +
      parseInt(interestPaidInput) -
      parseInt(standardDeductionInput)

    const CG = parseInt(shortTermCGInput) + parseInt(longTermCGInput)

    const deductions =
      parseInt(investmentExemptionInput) + parseInt(otherExemptionInput)

    const total =
      houseIncome + CG + parseInt(otherIncomeInput) + salary - deductions

    let amount = 0

    if (total <= 250000) {
      amount = total
    } else if (total > 250000 && total <= 500000) {
      const val = total - 250000
      amount = 0.05 * val
    } else if (total > 500000 && total <= 750000) {
      const val = total - 500000
      amount = 0.1 * val
    } else if (total > 750000 && total <= 1000000) {
      const val = total - 750000
      amount = 0.15 * val
    } else if (total > 1000000 && total <= 1250000) {
      const val = total - 1000000
      amount = 0.2 * val
    } else if (total > 1250000 && total <= 1500000) {
      const val = total - 1250000
      amount = 0.25 * val
    } else if (total > 1500000) {
      const val = total - 1500000
      amount = 0.3 * val
    }

    this.setState({
      clickBtn: true,
      clickBtnTxt: parseInt(amount),
      totalAnnualSalary: salary,
      totalIncomeHouse: houseIncome,
      totalCapital: CG,
      otherIncome: otherIncomeInput,
      totalDeductions: deductions,
      clickOldTxt: '',
      clickOld: false,
    })
  }

  render() {
    const {
      nameInput,
      inputAge,
      inputGender,
      residentialInput,
      basicSalaryInput,
      HRAAndLTRInput,
      allowancesInput,
      annualRentInput,
      municipalTaxesInput,
      standardDeductionInput,
      interestPaidInput,
      shortTermCGInput,
      longTermCGInput,
      otherIncomeInput,
      investmentExemptionInput,
      otherExemptionInput,
      otherIncomeLabelInput,
      clickBtn,
      clickBtnTxt,
      totalAnnualSalary,
      totalIncomeHouse,
      totalCapital,
      otherIncome,
      totalDeductions,
      clickOld,
      clickOldTxt,
    } = this.state

    return (
      <div className="bg-container">
        <h1>Tax Calculator</h1>
        <h2>Personal Information</h2>
        <div className="container">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <br />
            <input
              value={nameInput}
              onChange={this.onChangeName}
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="age">Enter Your Age</label>
            <br />
            <input value={inputAge} onChange={this.onChangeAge} id="age" />
          </div>
          <div className="input-container">
            <label htmlFor="gender">Select Your Gender</label>
            <br />
            <select
              value={inputGender}
              onChange={this.onChangeGender}
              id="gender"
            >
              {genderList.map(each => (
                <option key={each.id} value={each.genderTxt}>
                  {each.genderTxt}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="residence">Residence</label>
            <br />
            <select
              value={residentialInput}
              onChange={this.onChangeResidence}
              id="residence"
            >
              {residenceList.map(each => (
                <option key={each.id} value={each.residenceTxt}>
                  {each.residenceTxt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h2>Salary</h2>
        <div className="container">
          <div className="input-container">
            <label htmlFor="basicSalary">Enter Basic Salary</label>
            <br />
            <input
              value={basicSalaryInput}
              onChange={this.onChangeBasicSalary}
              id="basicSalary"
            />
          </div>
          <div className="input-container">
            <label htmlFor="HRAAndLTR">Enter Home And Travel</label>
            <br />
            <input
              value={HRAAndLTRInput}
              onChange={this.onChangeHomeTravel}
              id="HRAAndLTR"
            />
            <p className="example-para">
              Eg: House Rent Allowance (HRA) And Leave Travel Allowance (LTA)
            </p>
          </div>
          <div className="input-container">
            <label htmlFor="otherAllowances">Enter Other Allowances</label>
            <br />
            <input
              value={allowancesInput}
              onChange={this.onChangeOtherAllowances}
              id="otherAllowances"
            />
            <p className="example-para">
              Eg: Special Allowance,Transport Allowance, Reimbursements(Medical,
              Fuel, etc.), Employers Contribution to Provident Fund, Income Tax
              Deducted at Source (TDS) and Other Allowances.
            </p>
          </div>
        </div>
        <h2>Income From House Property</h2>
        <div className="container">
          <div className="input-container">
            <label htmlFor="annualRent">Enter Annual Rent Received</label>
            <br />
            <input
              value={annualRentInput}
              onChange={this.onChangeAnnualRent}
              id="annualRent"
            />
          </div>
          <div className="input-container">
            <label htmlFor="municipalTaxes">Enter Municipal Taxes</label>
            <br />
            <input
              value={municipalTaxesInput}
              onChange={this.onChangeMunicipalTaxes}
              id="municipalTaxes"
            />
          </div>
          <div className="input-container">
            <label htmlFor="standardDeduction">
              Enter Standard Deduction (30% of Net Annual Value)
            </label>
            <br />
            <input
              value={standardDeductionInput}
              onChange={this.onChangeStandardDeduction}
              id="standardDeduction"
            />
          </div>
          <div className="input-container">
            <label htmlFor="interestPaid">
              Enter Interest Paid on Home Loan (if applicable)
            </label>
            <br />
            <input
              value={interestPaidInput}
              onChange={this.onChangeInterestPaid}
              id="interestPaid"
            />
          </div>
        </div>
        <h2>Capital Gains</h2>
        <div className="container">
          <div className="input-container">
            <label htmlFor="shortTermCG">Enter Short-Term Capital Gains</label>
            <br />
            <input
              value={shortTermCGInput}
              onChange={this.onChangeShortTermCG}
              id="shortTermCG"
            />
          </div>
          <div className="input-container">
            <label htmlFor="longTermCG">Enter Long-Term Capital Gains</label>
            <br />
            <input
              value={longTermCGInput}
              onChange={this.onChangeLongTermCG}
              id="longTermCG"
            />
          </div>
          <br />
        </div>
        <h2>Other Income</h2>
        <div className="container">
          <div className="input-container">
            <label htmlFor="otherIncome">
              <select
                value={otherIncomeLabelInput}
                onChange={this.onChangeIncomeLabel}
                id="otherIncome"
              >
                {otherIncomeList.map(each => (
                  <option key={each.id} value={each.incomeTxt}>
                    {each.incomeTxt}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <input
              value={otherIncomeInput}
              onChange={this.onChangeIncome}
              id="otherIncome"
            />
          </div>
        </div>
        <h2>Deductions and Exemptions</h2>
        <div className="container">
          <div className="input-container">
            <label htmlFor="investmentExemption">
              Enter Investment And Expenses Under 80C
            </label>
            <br />
            <input
              value={investmentExemptionInput}
              onChange={this.onChangeInvestmentExemption}
              id="investmentExemption"
            />

            <p className="example-para">
              Eg: Life Insurance Premium, Public Provident Fund (PPF), Employee
              Provident Fund (EPF), National Savings Certificates (NSC), Tax
              Saving Fixed Deposits, Equity Linked Saving Scheme (ELSS),
              Principal Repayment on Home Loan, Children Tuition Fees
            </p>
          </div>
          <div className="input-container">
            <label htmlFor="otherExemption">
              Enter Other Deduction And Exemptions
            </label>
            <br />
            <input
              value={otherExemptionInput}
              onChange={this.onChangeOtherExemption}
              id="otherExemption"
            />
            <p className="example-para">
              Eg: Medical Insurance Premium Under 80D, Interest on Education
              Loan Under 80E, Donations to Charitable Institutions Under 80G,
              Interest on Savings Account Under 80TTA, Disability Under 80U,
              Interest On Home Loan Under 24 and Other Deductions.
            </p>
          </div>
        </div>
        <div className="btn-container">
          <button type="button" onClick={this.onClickOldBtn} className="btn">
            Old Tax Calculator
          </button>
          <button type="button" onClick={this.onClickBtn} className="btn">
            New Tax Calculator
          </button>
        </div>
        {clickBtn ? (
          <div className="res-container">
            <h2 className="regime">New Regime</h2>
            <ul className="unordered-list">
              <li>
                Name : <span>{nameInput}</span>
              </li>
              <li>
                Age : <span>{inputAge}</span>
              </li>
              <li>
                Gender : <span>{inputGender}</span>
              </li>
              <li>
                Residential Status : <span>{residentialInput}</span>
              </li>
              <li>
                Total Annual Salary : <span>{totalAnnualSalary}</span>
              </li>
              <li>
                Total Income From House Property :{' '}
                <span>{totalIncomeHouse}</span>
              </li>
              <li>
                Capital Income : <span>{totalCapital}</span>
              </li>
              <li>
                {otherIncomeLabelInput} Income : <span>{otherIncome}</span>
              </li>
              <li>
                Deductions And Exemptions : <span>{totalDeductions}</span>
              </li>
            </ul>
            <p className="tax-para">
              Tax Amount Annually{' '}
              <span className="res-span">{clickBtnTxt}</span>
            </p>
          </div>
        ) : (
          ''
        )}
        {clickOld ? (
          <div className="res-container">
            <h2 className="regime">Old Regime</h2>
            <ul className="unordered-list">
              <li>
                Name : <span>{nameInput}</span>
              </li>
              <li>
                Age : <span>{inputAge}</span>
              </li>
              <li>
                Gender : <span>{inputGender}</span>
              </li>
              <li>
                Residential Status : <span>{residentialInput}</span>
              </li>
              <li>
                Total Annual Salary : <span>{totalAnnualSalary}</span>
              </li>
              <li>
                Total Income From House Property :{' '}
                <span>{totalIncomeHouse}</span>
              </li>
              <li>
                Capital Income : <span>{totalCapital}</span>
              </li>
              <li>
                {otherIncomeLabelInput} Income : <span>{otherIncome}</span>
              </li>
              <li>
                Deductions And Exemptions : <span>{totalDeductions}</span>
              </li>
            </ul>
            <p className="tax-para">
              Tax Amount Annually{' '}
              <span className="res-span">{clickOldTxt}</span>
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default App
