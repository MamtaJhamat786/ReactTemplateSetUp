import Row from './Row.jsx';
import Card from './Card.jsx';


export default function GridDemoPage() {
    return (
        <div>

        <Row>
          <div className="col-12">
              <Card category="some Category" title="sometitle" icon="icon-bus-front-12"> 
              My text
              </Card>   
          </div>
         </Row>

         <Row>
          <div className="col-4">
              <Card category="some Category" title="sometitle"icon="icon-bus-front-12">  
              My text
              </Card>   
          </div>
          <div className="col-4">
              <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
               No problem
              </Card>     
          </div>
          <div className="col-4">
              <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
              My text
              </Card>     
          </div>
         </Row>

         <Row>
          <div className="col-6">
              <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
              My text
              </Card>     
          </div>
          <div className="col-6">
              <Card category="some Category" title="sometitle" icon="icon-bus-front-12">
              My text
              </Card>     
          </div>
         </Row>
          
        </div>
    )
}
