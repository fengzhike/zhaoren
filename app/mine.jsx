require('./style/reset')
require('./style/main')

import FindItem from './finditem';
import Portrait from './portrait';
import Footer from './footer';
import Forms from './form';
var [TextFiled,ConnectInput,PayInput,SubmitBtn] = Forms;



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

var Tab = React.createClass({
    getInitialState:function(){
        return{
           currentIndex : 0 
        } 
    },

    check_tittle_index:function(index){
        return index === this.state.currentIndex ? "active" : "";
    },
    render:function(){
        return <nav className="tabNav clearFix">
             { React.Children.map( this.props.children , (element,index) => {
                    let _this = this;
                    return(
                        /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                        <div  onClick={ () => { this.setState({currentIndex : index})
                        this.props.handerRender(index)
                         } } className={ this.check_tittle_index(index) }>
                             { element.props.name }</div>
                        );
                    }) }
        </nav>
    }
})

var MainBox = React.createClass({
    getInitialState:function(){
        return {tabIndex:0}
    },
    handleChange:function(){

    },
    handerRender:function(index){
        this.setState({tabIndex:index})
    },
    render:function(){
       var MiddleCon = [];
       var styles = {background:'#fff'}
        var items = data.map(function(item){
            return <FindItem itemdata = {item} />
        })
        if(this.state.tabIndex !=0){
            MiddleCon = <ul className='find_item_box'>{items}</ul> 
        }else{
            MiddleCon = <div className = 'serach_form'>
                            <TextFiled />
                            <PayInput />
                            <ConnectInput />
                            <SubmitBtn/>
                            <p className = 'agree'>
                                <label>
                                    <input type = "checkbox" onChange = {this.handleChange}/>
                                    <span>我已阅读并同意</span>
                                </label>
                                
                                <mark>《有名找人用户协议》</mark>
                            </p>
                        </div>
        }
        return <div  className = "bgdefault "  id = 'mine'>
            <Portrait isBalance = 'true' />
            <Tab  handerRender = {this.handerRender}>
                <div className = "bdr active" name = '寻找'>寻找</div>
                <div name = '记录'>记录</div>
            </Tab>
            {MiddleCon}
            <Footer />
        </div>
    }
})
ReactDOM.render(<MainBox/>,$('.content')[0]);
$('.footer-bar a:eq(1)').addClass('active')
