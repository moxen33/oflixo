import React, { useState, memo, Fragment } from 'react'

//React-bootstrap
import { Button } from 'react-bootstrap'

const Counter = memo(() => {
  const [counter, setCount] = useState(2);
  const increase = () => setCount(counter + 1);
  const decrease = () => setCount((counter > 0) ? counter - 1 : 0);
  return (
    <Fragment>
      <div className="btn-group iq-qty-btn custom-qty-btn rounded-3" data-qty="btn" role="group">
        <Button variant="btn-outline-light iq-quantity-minus text-white border-0" size="sm" onClick={decrease}>
          <i className='ph ph-minus fw-bold'></i>
        </Button>{" "}
        <input type="text" data-qty="input" className="btn btn-sm btn-outline-light input-display border-0" value={counter} title="Qty" placeholder="" readOnly />{" "}
        <Button variant="btn-outline-light iq-quantity-plus text-white border-0" size="sm" onClick={increase}>
          <i className='ph ph-plus fw-bold'></i>
        </Button>
      </div>
    </Fragment>
  )
})

Counter.displayName = "Counter"
export default Counter
