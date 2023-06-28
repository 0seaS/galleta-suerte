

const Galleta = ({data}) => {

    return(
        <>
        <div className="container">
            <div className="title-content">
                <h1>GALLETAS DE LA FORTUNA</h1>
            </div>
            <div className="fortune-content">
                <p>
                    {data?.phrase}
                </p>
            </div>
            
        </div>
        </>
    )
}

export default Galleta