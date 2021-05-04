export default function Card(props){
    let iconTitle = `tim-icons ${props.icon} text-primary`
    return (
        <div>
              <div className="card card-chart">
                
                <div className="card-header ">
                  <div className="row">
                    <div className="col-sm-12 text-left">
                      <h5 className="card-category">{props.category}</h5>
                      <h2 className="card-title">
                       <i class={iconTitle}></i>
                          {props.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {props.children}
                </div>
              </div>
        </div>

    );

}