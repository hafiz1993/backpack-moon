import React from 'react';
import img1 from '../../images/image 12.png';
import img2 from'../../images/image 13.png';
import img3 from'../../images/image 14.png';
import big1 from '../../images/XMLID 1.png';

const Description = () => {
    return (
        <div class="row d-flex justify-content-center mt-5 mb-5">
            
            <div className="col-md-5 text-left">

          
            <div class="card mb-4 shadow p-3 mb-5 bg-white rounded" style={{maxWidth: '540px'}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img style={{width:'100px'}} src={img1} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Find the Perfect Fit</h5>
        <p class="card-text"><small class="text-muted">Everybody is different, which is why we

offer styles for every body.</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-4 shadow p-3 mb-5 bg-white rounded" style={{maxWidth: '540px'}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img style={{width:'100px'}} src={img2} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Free Exchanges</h5>
        <p class="card-text"><small class="text-muted">One of the many reasons you can shop

with peace of mind.</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-4 shadow p-3 mb-5 bg-white rounded" style={{maxWidth: '440px'}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img style={{width:'100px'}} src={img3} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8 ">
      <div class="card-body">
        <h5 class="card-title">Contact Our Seller</h5>
        <p class="card-text"><small class="text-muted">They are here to help you. That's quite
literally what we pay them for.</small></p>
      </div>
    </div>
  </div>
</div>











            </div>
            <div className="col-md-7 pt-5 ">
                <img src={big1} style={{width:'100%'}}  alt=""/>
            </div>
        </div>
        
    );
};

export default Description;