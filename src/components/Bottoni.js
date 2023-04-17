import React, {useState, useEffect} from 'react'
import "./Bottoni.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceThree, faCircleStop } from '@fortawesome/free-solid-svg-icons'

const Bottoni = () =>{

    const [leva, setLeva] = useState(false)
    const [tempo, setTempo] = useState(0)
    const [gradi, setGradi] = useState(0)
    let timeo;

    const [giri, setGiri] = useState(0)
    const [three, setThree] = useState("Three")

    const [fine, setFine] = useState('')

    let r = document.querySelector(':root');

    function ancora(){
        setGiri((p)=> p + 1)
        setGradi(0)

        if(giri < 7){
            setThree( Math.ceil(Math.random()*1000) )
        }else if(giri>= 15){
            setThree( Math.ceil(Math.random()*100000) )
        }else{
            setThree( Math.ceil(Math.random()*10000) )
        }
    }

    function winn(){

        if( three %3=== 0){
            ancora()
        }else{
            setLeva((h)=> !h)
        }
    }

    function loss(){

        if( three %3=== 0){
            setLeva((h)=> !h)

        }else{
            ancora()
        }
    }

    function inizio(){
        setLeva((x)=> !x)
        setThree( Math.ceil(Math.random()*100) )
    }

    useEffect( ()=> {

        if(leva){
            
            timeo= setInterval(()=>{
                setTempo( (x)=> x + 1 )
                setGradi( (g)=> g + 1.2 )

                r.style.setProperty('--slice', gradi + 'deg')
            }, 10)

        }else if(!leva && tempo> 0){            
            setFine( "You got " + giri + " numbers in " + tempo/100 + " seconds" )

            clearInterval(timeo)
            setTempo(0)
            setGradi(0)
            setGiri(0)
        }
        
        if(gradi >= 360){
            setLeva(false)
        }

        return ()=> {
            clearInterval(timeo)
        }

    }, [leva, tempo, gradi])

    return (
        <div>

            <div className="mezzo d-flex align-items-center flex-column">
                <div className="circolo m-auto ">
                    <div className="centrato"> {three} </div>
                </div>
            </div>

            {leva ? 
              <div className='d-flex flex-column'>

                <div className="d-flex justify-content-center ">
                    <button className="btn btn-warning me-3 p-1 px-3 fw-bold fs-5"
                            onClick={winn}
                    >
                        <span>Three </span>
                        <FontAwesomeIcon icon={faDiceThree} style={{color: "brown",}} />
                    </button>
                    <button className="btn btn-warning ms-3 p-1 px-3 fw-bold fs-5"
                            onClick={loss}
                    >
                        <span>No three</span>
                    </button>
                </div>
                <div className='d-flex justify-content-center my-2 my-sm-2'>

                    <button className="btn btn-danger p-1 px-2 fw-bold fs-5"
                            onClick={ ()=> setLeva((w)=> !w) }
                    >
                        <span>Stop </span>
                        <FontAwesomeIcon icon={faCircleStop} />
                    </button>

                </div>

              </div>
              :
              <div className='d-flex justify-content-center '>
                <button className="btn btn-warning p-3 px-5 fw-bold fs-5"
                        onClick={ inizio }
                >
                    Start
                </button>
              </div>
            }

            <div className="d-flex justify-content-center my-1">
              <h2 className="w-75 text-center">
                
                {
                (!leva ) ?
                    fine
                    :
                    ""
                }

              </h2>
            </div>

        </div>
    )
}

export default Bottoni