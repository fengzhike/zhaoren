var React = require('react');
var ReactDOM = require('react-dom');


//头像下 账户零钱
var Balance = React.createClass({
    render:function(){
        if(this.props.isBalance){
            return <div className = "balance bdb">
                <span>总收入：</span>
                <b>￥10元</b>
            </div>
        }else{
            return null;
        }
        
    }
})



var Protrait = React.createClass({
    render:function(){
        return <div className = "pro_box">
            <div className = 'pic_wrap'>
                <img src = 'http://cdnimg2.edu.euming.com/pkuie/userInfo/upload/20160302/u_1456887229748_584605-1.jpg' alt = ''/>
            </div>
            <h4>杏仁巧克力</h4>
            <Balance  isBalance = {this.props.isBalance} />
        </div>
    }
})
export default Protrait