var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin')
var path = require("path");
module.exports = {
	entry:{
		build:"./app/index.jsx",
		mine:'./app/mine.jsx'
	},
	output:{
		path:"./build/",
		filename:"[name].js"
	},
	module:{
		loaders:[
             {  
                test: /\.scss$/,
                loaders: ["style", "css", "sass"],
                exclude:"/node_modules/",
                include:path.resolve(__dirname,"app")
            },
			{
				test:/\.css$/,
				loaders:["style","css"],
				exclude:"/node_modules/",
                include:path.resolve(__dirname,"app")
			},
			{
				test:/\.(png|jpg)$/,
				loaders:['url?limit=80000'],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"app")
			
			},
			{
				test:/\.jsx?$/,
				loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"app")
			}
		]
	},
	devServer:{

	},
	resolve:{
		extensions:['','.js',".css",'.jsx',".scss"]  //自动补全识别后缀
	},
	plugins:[
		new extractTextPlugin('./lib/css/weui.min.css'),
		new htmlWebpackPlugin({
			title:"有名人才",
			chunks:["build"],
			template:'./build/template/index.html'
		}),
		new htmlWebpackPlugin({
			title:"有名人才",
			filename:'./mine.html',
			chunks:["mine"],
			template:'./build/template/index.html'
		}),

	]
}