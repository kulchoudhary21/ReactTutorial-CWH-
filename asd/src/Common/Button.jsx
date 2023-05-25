import React from 'react'

const Button = ({title, color, type}) => {
  
    function doS(){
        switch (type){
            case 'num':
                alert('num')
                break
            case 'str':
                alert('str')    
                break
        }
    }
  
    return (
    <div>
      <button onClick={doS} style={{color: color}}>
            {title} 
      </button>
    </div>
  )
}

export default Button
