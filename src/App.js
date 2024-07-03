
import './App.css';
import logo from './img/Walmart-Logo-PNG-Image.png'
import hand from './img/handpng.webp'
import chair from './img/chair.jpg'
import host from './img/host.jpg'
import dive from './img/dive.webp'
import lovex from './img/lovex.webp'
import cycle from './img/cycle.webp'
import flash from './img/flash.webp'
import heat from './img/heat.webp'
import duck from './img/duck.jpg'
import cap from './img/cap.webp'
import wdel from './img/walmart del.webp'
//react icons
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { BsUiRadiosGrid } from "react-icons/bs";
import { DiLaravel } from 'react-icons/di';
function App() {
  return (
    <div className='main'>
        <div className='mainnav'>
      <div className='nav1'>

        <div className='logo1'>
          <img src={logo} />
        </div>


        <div className='btn1'>
          <img src={hand} />
          <div className='btntxt'>
            <p>How do  you want your items? </p>
            <span> Sacramento, 95829 .Sacramento Su... </span>
          
          </div>
        </div>


        <div className='navbtn'>
          <input placeholder='Search everything at Wallmart online and in store'  ></input>
          <div className='searchicon'>
            <IoSearchOutline className='srh'/>
          </div>
        </div>

        <div className='items'>
          <div className='hearticon'>
            <IoMdHeartEmpty />
          </div>
          <div className='itemtxt'>
            <p>Recorder <br></br> <b>My Items</b></p>
          </div>
        </div>

        <p></p>   {/* forspace */}

        <div className='items'>
          <div className='hearticon'>
            <IoMdContact />
          </div>
          <div className='itemtxt'>
            <p>Sign In <br></br> <b>Accounts</b></p>
          </div>
        </div>


        <div className='items'>
          <div className='carticon'>
            <MdOutlineShoppingCart />
          </div>
          <div className='carttxt'>
            <p>  $0.00</p>
          </div>
        </div>
      </div>

      <div className='nav2'>
        <div className='navhead'>
          <div className='gridicon'>
            <CiGrid41 />
          </div>
          <span>Departments</span>
          <select></select>
        </div>

        <div className='navhead'>
          <div className='gridicon'>
            <BsUiRadiosGrid />
          </div>
          <span>Services</span>
          <select></select>
        </div>

        <div className='navlists'>
          <li>|</li>
          <li>Deals</li>
          <li>Grocery & Essential</li>
          <li>Father's Day</li>
          <li>Summer Shop</li>
          <li>Pride Always</li>
          <li>Fashion</li>
          <li>Home</li>
          <li>Electronics</li>
          <li>Patio & Garden</li>
        </div>

      </div>
      </div>
      {/* pics */}
      <div className='productpics'>
        <div className='start'>
          <div className='start1'>
            <div className='start1txt'>
              <p>Patio style <br></br> Without the <br></br> splurge </p>
              <span>Shop now</span>
            </div>
            <img src={chair} />
          </div>

          <div className='start2'>
            <img src={dive} />
          </div>

          <div className='start3'>
            <img src={cap} />
          </div>
        </div>


        {/* center points */}
        <div className='center'>
          <div className='center1'>
            <div className='center1txt'>
              <p>Entertain with ease</p>
              <li>Host alfresco</li>
              <span>Shop now</span>
            </div>
            <img src={host} />
          </div>
          <div className='center2'>
            <img src={cycle} />
          </div>

          <div className='center3'>
            <img src={flash} />
          </div>

          <div className='center4'>
            <img src={wdel} />
          </div>

        </div>



        {/* end pointss */}
        <div className='end1'>
          <div className='end1txt'>
            <p>Break the Love x <br></br> Walmart</p>
            <span>Learn More</span>
          </div>
          <img src={lovex} />

          <div className='end2'>
            <img src={heat} />
          </div>

          <div className='end3'>
            <img src={duck} />
          </div>


        </div>


      </div>



    </div> //maindiv
  );
}

export default App;
