import React from 'react';

function Card(props) {
    return (
        <>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                    <div className='mb-3'>
                                        <label>Email</label>
                                        <input type="email" className='form-control'/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;