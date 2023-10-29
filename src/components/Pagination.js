import { useState, useEffect } from "react";




const Paginotion = ({pages, setCurrentPage, currentEmployees, sortedEmployees}) => {

    const numOfpages = [];

    for (let index = 1; index <= pages; index++) {
        numOfpages.push(index);

    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(()=> {
        setCurrentPage(currentButton)
    }, [currentButton, setCurrentPage])

    return (
        <div className="clearfix">
            <div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{sortedEmployees.length}</b> entries</div>
            <ul className="pagination">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((Prev) => Prev === 1 ? Prev : Prev - 1)}
                >Previous</a></li>

                {
                    numOfpages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}><a href="#!" className="page-link"
                            onClick={() => setCurrentButton(page)}
                            >{page}</a></li>
                        )
                    })
                }

                <li className={`${currentButton === numOfpages.length ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((Prev) => Prev === numOfpages.length ? Prev : Prev + 1)}
                >Next</a></li>

            </ul>
        </div>
    )
}

export default Paginotion

