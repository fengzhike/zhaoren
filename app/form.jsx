var React = require('react');
var ReactDOM = require('react-dom');


var TextFiled = React.createClass({
    render:function(){
        return <div className = 'textFiled mgt'>
            <h3>我要寻找:</h3>
            <textarea maxLength = '140' placeholder = '可以照顾孩子的月嫂；可以来回公司做饭的私人厨师；为感情答疑解惑的心理咨询师…… 最多可输入140个字'></textarea>
        </div>
    }
})

var ConnectInput = React.createClass({
    render:function(){
        return <div className  = 'mgt connect'>
            <span>我的联系方式:</span>
            <input type= 'text' placeholder = "电话、微信、邮箱"/>
        </div>
    }
})

var PayInput = React.createClass({
    render:function(){
        return <div className  = 'mgt payInput'>
            <span>帮我找到需要支付</span>
            <input type = "number" />
            <span>元</span> 
        </div>
    }
})
var SubmitBtn = React.createClass({
    render:function(){
        return <button className = 'btn_search'>立即寻找</button>
    }
})

export default [TextFiled,ConnectInput,PayInput,SubmitBtn]
