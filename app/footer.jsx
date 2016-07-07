
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery')



var Footer = React.createClass({
    render:function (){
        return <div className ='footer-bar bdt ' >
            <a href = "./index.html" >案例</a>
            <a href = "./mine.html" >我的</a>
        </div>
    }
})
export default  Footer
