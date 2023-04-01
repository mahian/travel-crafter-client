import React from 'react';

const Form = () => {
    return (
        <>
            <div className='container'>
                <div className='hero-form'>
                    <form className='d-md-flex search-form bg-white'>
                        <div className="input-group py-3">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">@</span>
                            <input type="text" className="form-control border-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group py-3 border-start">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">@</span>
                            <input type="text" className="form-control border-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group py-3 border-start">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">@</span>
                            <input type="text" className="form-control border-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <button type="submit" className="primary-btn rounded-0 px-5">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;