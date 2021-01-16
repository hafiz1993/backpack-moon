import React from 'react';
import bag from '../../images/image 4.png'
import background from '../../images/green.png'
import cart from '../../images/shopping-cart 1.png';



const Header = () => {
    return (
        <div class="row d-flex justify-content-center mt-5">
            <div className="col-md-4 text-left pt-5">
                <h1>BackPack <br/>Moon</h1>
                 <p>Lorem ipsum dolor sit amet, <br/>  Aut, distinctio.distinctio.distinctio. <br/> distinctio.distinctio.distinctio.</p> 

                 <button style={{width:'150px', height:'50px', color:'white', backgroundImage: 'linear-gradient(to right bottom, #e25a27, #c6373b, #a11d45, #761146, #4a0d3d)'}} type="button" class="btn "> <img style={{width:'25px'}} src={cart} alt=""/> BUY NOW</button>
                 </div>
            <div style={{ backgroundImage: `url(${background})`}} className="col-md-7 ">
                    <img style={{width:'450px'}} src={bag} alt=""/>
                </div>
        </div>
    );
};

export default Header;