const Navegation = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        {
          (props.prev) && (<button className="btn btn-primary btn-sm"
            onClick={()=> props.setPage(props.page - 1)}
          >
            Page: {props.page - 1}
          </button>)
        }
        <p className="my-auto">Page: {props.page}</p>
        {
          (props.next) && (<button className="btn btn-primary btn-sm"
            onClick={()=> props.setPage(props.page + 1)}
          >
            Page: {props.page + 1}
          </button>)
        }
    </div>
  )
}

export default Navegation