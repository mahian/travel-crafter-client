import React from 'react';

const Form = () => {
    return (
        <>
            <div className='container'>
                <div className='main-form'>
                    <div className="row text-white">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <label >Keywords</label>
                            <input className="form-control" placeholder="" type="text" name="" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <label >Category</label>
                            <select className="form-control" name="Any">
                                <option>Any</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <label >Min Price</label>
                            <input className="form-control" placeholder="00.0" type="text" name="00.0" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <label >Duration</label>
                            <input className="form-control" placeholder="Any" type="text" name="Any" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <label >Date</label>
                            <input className="form-control" placeholder="Any" type="date" name="Any" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                            <label >Max Price</label>
                            <input className="form-control" placeholder="00.0" type="text" name="00.0" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className='white-btn'>search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;