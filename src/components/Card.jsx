import React from "react"

export default function Card(){
    return (
        <>
            <h1 className='title'>User Profile Card</h1>
            <div className="card">
                <div className="card-content">
                    <div className="Name">First Name <br></br> Last Name</div>
                    <div className="About">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora nostrum repellendus. 
                            Recusandae unde possimus explicabo asperiores itaque cupiditate, veritatis nemo harum maiores 
                            deleniti sit exercitationem amet alias doloremque perspiciatis.
                        </p>
                    </div>
                    <div className="social">
                        PlaceHolder
                    </div>
                </div>
                <div className="card-picture">
                </div>
            </div>
        </>

    )
}