var React = require('react');
var ReactDOM = require('react-dom');

export default class FindItem extends React.Component{
    render(){
        return <div className="bannerAdPics">
                    <div className="focus">
                        <div className="hd">
                            <ul></ul>
                        </div>
                        <div className="bd">
                            <ul>
                                <li className="pic_list" >
                                    <img src = 'http://cdnimg2.edu.euming.com/pkuie/2016/07/01/s_1467341666604_7O6Vrh.jpg'/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    }
}