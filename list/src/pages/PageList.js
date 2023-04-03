import React from "react";
import { getDatabase } from "firebase/database";



import "./PageList.css"
export const PageList = () => {

    const db = getDatabase()
    console.log(db)
    return (
        <>
          <div className="inputBlock">
              <div className='inputGroup'>
                  <input type="text"/>
                  <input type="submit"/>
              </div>

              <div className='showBlock'>

              </div>
          </div>




        </>




    )

}

