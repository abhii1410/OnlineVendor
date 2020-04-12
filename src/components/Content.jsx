import React, {Component} from 'react';
import CreateRoutes from '../route';

const routes = CreateRoutes();
console.log('routes',routes);
export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                
                            {routes}
                               
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}