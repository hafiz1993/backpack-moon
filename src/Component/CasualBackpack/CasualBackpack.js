import React from 'react';
import img4 from '../../images/pngwing 1.png';

const CasualBackpack = () => {
    return (
        <div class="pl-5">
            <div className="col-md-6">
                <h2 style={{textAlign:'left', color:'#004959'}}>Casual BackPack</h2>
            </div>
            <div className=" row  d-flex justify-content-center mb-5">
            <div class="card text-justify mr-4 mt-3" style={{width: '20rem'}}>
  <img  src={img4} class="card-img-top p-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Nike Sportswear Hayward</h5>
    <p>Lorem Ipsum is simply dummy text of theprinting and typesetting industry. </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-justify mr-4 mt-3" style={{width: '20rem'}}>
  <img src={img4} class="card-img-top p-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">School backpack</h5>
    <p>Lorem Ipsum is simply dummy text of theprinting and typesetting industry. </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card text-justify mr-4 mt-3" style={{width: '20rem'}}>
  <img src={img4} class="card-img-top p-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CityLite Security Backpack</h5>
    <p>Lorem Ipsum is simply dummy text of theprinting and typesetting industry. </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>            
            </div>
        </div>
        
    );
};

export default CasualBackpack;