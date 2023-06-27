import React from 'react'

export default function Failure(props) {
  let {search, loading} = props;
  return (
    <>
        {search && !loading ? 
        <div className="empty">
            <h4 className="empty-text">No results Found</h4>
        </div>
        : ''}
    </>
  )
}
