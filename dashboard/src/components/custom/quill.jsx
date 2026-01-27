import React, { memo, Fragment } from "react";

import { useQuill } from "react-quilljs";


const Quill = (props) => {
      const { quillRef } = useQuill();
    return(
        <Fragment>
             <div ref={quillRef} style={{ height: 200 }}>{props.children}</div>
        </Fragment>
    )
}

export default Quill