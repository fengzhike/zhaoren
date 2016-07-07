require('./style/reset')
require('./style/main')

import Banner from './banner';
import FindItem from './finditem';
import Footer from './footer';

var $ = require('jquery')
$('html').css('font-size',$('body').outerWidth()/16);

var React = require('react');
var ReactDOM = require('react-dom');
var data = [
            {
                f_state:'正在寻找中',
                pub_time:'2016-07-06',
                content:'可以推荐本人进入阿里巴巴市场部的员工',
                price:'1000',
                do_state:'放弃寻找'
            }, 
            {
                f_state:'正在寻找中',
                pub_time:'2016-06-06',
                content:'一个Facebook工程师开发的被用于构建用户界面',
                price:'100',
                do_state:'放弃寻找'
            }, 
            {
                f_state:'正在寻找中',
                pub_time:'2016-06-06',
                content:'一个Facebook工程师开发的被用于构建用户界面',
                price:'100',
                do_state:'放弃寻找'
            }, 
            {
                f_state:'正在寻找中',
                pub_time:'2016-06-06',
                content:'一个Facebook工程师开发的被用于构建用户界面',
                price:'100',
                do_state:'放弃寻找'
            }, 
            {
                f_state:'正在寻找中',
                pub_time:'2016-06-06',
                content:'一个Facebook工程师开发的被用于构建用户界面',
                price:'100',
                do_state:'放弃寻找'
            }, 
            {
                f_state:'正在寻找中',
                pub_time:'2016-06-06',
                content:'一个Facebook工程师开发的被用于构建用户界面',
                price:'100',
                do_state:'放弃寻找'
            }, 
            {
                f_state:'正在寻找中',
                pub_time:'2016-06-06',
                content:'一个Facebook工程师开发的被用于构建用户界面',
                price:'100',
                do_state:'放弃寻找'
            }, 
            {
                f_state:'正在寻找中',
                pub_time:'2016-06-06',
                content:'一个Facebook工程师开发的被用于构建用户界面',
                price:'100',
                do_state:'放弃寻找'
            }, 
            {
                f_state:'正在寻找中',
                pub_time:'2016-06-06',
                content:'一个Facebook工程师开发的被用于构建用户界面',
                price:'100',
                do_state:'放弃寻找'
            }
        ]


var MainBox = React.createClass({
    getDefaultProps: function () {
        
    },
    propTypes: {
        config: React.PropTypes.array
    },
    render:function(){
       // console.log(this.props)
        var items = data.map(function(item){
            return <FindItem itemdata = {item} noHeader = "true"/>
        })
        return <div>
            <Banner/>
            <ul className='find_item_box'>
                {items}
            </ul>
            <Footer />
        </div>
    }
})
ReactDOM.render(<MainBox />,$('.content')[0]);
$('.footer-bar a:eq(0)').addClass('active')
