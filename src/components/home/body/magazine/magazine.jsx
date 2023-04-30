
const Magazine = ()=>{
    return (
        <>
            <a className="" href="">
                <div className="right">
                    <img src="https://cinematicket.org/v3.13.2/assets/images/logo.svg" alt="" />
                    <h6 className="px-2 mt-2">مجله سینماتیکت</h6>
                    <span className="badge bg-secondary p-2">جدید</span>
                </div>
                <div className="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
            </a>
        </>
    )
}

export default Magazine;