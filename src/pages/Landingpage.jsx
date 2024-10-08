

 import { faSackDollar,faClipboard ,faChartSimple} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'


function Landingpage() {
  const navigate = useNavigate()

  const incomePage = ()=>{
    navigate(`/income`)
  }
  
  const expensePage = ()=>{
    navigate(`/expense`)
  }



  return (
    <>
    <Header/>
      <section >
        <div className="row my-5 p-5">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h4 style={{ overflowY: "hidden", color: "#270308" }}> <b>Smart Spending Starts Here: Your Expense Tracker Handbook</b> </h4>
            <p> Welcome to our Expense Tracker page, your go-to resource for mastering your finances. Whether you're saving for a rainy day or aiming for financial freedom, start your journey towards smart spending and budgeting with our intuitive tools and expert guidance. Take control of your money and achieve your financial goals one expense at a time! Expense tracker enables you to monitor how much of your budget has been spent over time, to see how much is remaining and course-correct when necessary.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img className='mb-3 ' src="https://happay.com/blog/wp-content/uploads/sites/12/2022/08/what-is-expense-management.png" width={'440px'} alt="titleimage"  />
          </div>
           <div className="col-md-1"></div> 
        </div >

      </section>


      <section>
        <div className="row my-5">
          <h3 className=' text-center '><b>Looking to locate your expenditures?</b></h3>
          <div className="col-md-2"></div>
          <div className="col-md-4 mt-5 ms-3">
            <img src="https://cdn.dribbble.com/users/513906/screenshots/3986167/moneyslides_800x600.gif" width={'350px'} alt="titlegif" />
          </div>
          <div className="col-md-5 mt-4 pt-5 justify-content-center align-items-center">
         
            <h6 className='mt-3 mx-4'>
              
               <Link to={'/income'}> <button  variant="outline-light" style={{ borderRadius: "8px", color: "white", border: 'none' }} className='ms-2 p-2 bg-success w-50'><FontAwesomeIcon icon={faSackDollar} className='me-2' />ADD INCOME</button> </Link><br />
              </h6>

            <h6 className='mt-3 mx-4'>
              <Link to={'/expenses'}><button style={{ borderRadius: "8px", color: "white", border:'none' }} className='ms-1 w-50  p-2 bg-danger '><FontAwesomeIcon className='me-2' icon={faClipboard} />ADD EXPENSES</button></Link>
            </h6>

            <h6 className='mt-3 mx-4'>
              <Link to={'/report'}><button style={{ borderRadius: "8px", color: "white", border:'none' }} className='ms-1 w-50 p-2 bg-warning'><FontAwesomeIcon className='me-2' icon={faChartSimple} />REPORT</button> </Link>
            </h6>
          </div>
          <div className='col-md-1'></div>

        </div>
      </section>
     
    </>
  )
}

export default Landingpage
