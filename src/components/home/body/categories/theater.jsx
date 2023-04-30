function Theater({Theater}) {
    return (
        <>
            <div className="container">
                <div className="row">
                    {Theater.map((movie, index)=> (
                        
                        <div key={index} className="col-2 mx-3 my-1">
                            <div className="card categories-card">
                                <img src={movie.image} className="categories-img" />

                                <div className="d-flex justify-content-between align-items-end p-1">
                                    <h5 className="fs-6 ">{movie.movie_name}</h5>
                                    <button className="btn btn-danger btn-sm">خرید بلیت</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>     
        </>
    )
}

export default Theater;