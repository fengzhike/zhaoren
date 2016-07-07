var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({

    render(){
        var dataItem = this.props.headerData
        if(this.props.noHeader){
            return null;
        }else{
            return <header className = 'clearFix'>
                <p className = "left">{dataItem.f_state}</p>
                <time className = "right">{dataItem.pub_time}</time>
            </header>
        }
        
    }
})



export default class FindItem extends React.Component{
    render(){
        var itemData = this.props.itemdata;
        var bNoHeader = this.props.noHeader;
        return <li className = 'mgt'>
                    <Header headerData = {itemData} noHeader = {bNoHeader}/>
                    <p className = "item_content"><b>寻找：</b>{itemData.content}</p>
                    <div className = "item_footer clearFix">
                        <div className = "left item_price">
                            <span>感谢费：<i>￥</i></span><b>{itemData.price}</b>
                        </div>
                        <div className="item_b_r right border">
                            {itemData.do_state} 
                        </div>
                    </div>
                </li> 
       
    }
}