import React from 'react';
import img4 from '../../images/pngwing 1.png';

const CasualBackpack = () => {
    return (
        <div class="container">
            <div>
                <h2 style={{textAlign:'left', color:'#004959'}}>Casual BackPack</h2>
            </div>
            <div className="row mt-5  d-flex justify-content-center ">
            <div class="card text-justify mr-4 mt-3" style={{width: '18rem'}}>
  <img src={img4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-justify mr-4 mt-3" style={{width: '18rem'}}>
  <img src={img4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card text-justify mr-4 mt-3" style={{width: '18rem'}}>
  <img src={img4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>            
            </div>
        </div>
        
    );
};

export default CasualBackpack;