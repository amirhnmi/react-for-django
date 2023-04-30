function SalesTable({Sales}) {
    return (
      <>
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between p-3">
                    <div className="right">
                      <h6 className="fw-bold">جدول فروش</h6>
                    </div>
                    <div className="left">
                      <h6>آخرین بروزرسانی : دیروز</h6>
                    </div>  
                </div>
                <hr />
                {Sales.map((sale,index)=>(
                    <div key={index} className="d-flex">
                        <img src={sale.image} className="salestable-img" alt="..."/>
                        <div className="d-flex justify-content-between mt-3">
                            <div className="right">
                                <p className="fw-bold">{sale.movie_name}</p>
                                <p className="fs-6 mt-5">{sale.director}</p>
                            </div>
                            <div className="left">
                                {sale.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </>
    )
  }
  
  export default SalesTable;
  