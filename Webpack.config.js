
const path=require('path')


const configureWebpack= {
    module: {
        rules: [
            {
                test: /CovidTests/,
                loader: 'null-loader', // also tried 'dumb-loader'
                exclude: [
                    path.resolve(__dirname, 'src/components/CovidTests/CovidTests.jsx'),
                  ], // this seems to exclude the file from the bundle
            },
        ],
    },
}


module.exports=configureWebpack