function News({News}) {
  return (
    <>
      <div className="container">
          <div className="row ">
              <div className="d-flex justify-content-between p-3">
                  <div className="right">
                    <h5 className="fw-bold">اخبار سینما و تئاتر</h5>
                  </div> 
              </div>
              <hr />
              {News.map((news, index)=>(
                <a key={index} className="news-a-tag" href="">
                  <div className="news-container">
                      <img src={news.image} className="news-img" alt="..."/>
                    <div className=" mt-3">
                        <div className="right">
                            <p className="fw-bold">{news.title}</p>
                            <p className="fs-6 mt-3">{news.publish_date}</p>
                        </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
      </div>
    </>
  )
}

export default News;