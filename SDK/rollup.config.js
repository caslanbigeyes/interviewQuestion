
import path from 'path';
import ts from 'rollup-plugin-typescript2';

export default [
    {
        input: './src/core/index.ts',
        output: [
            // 打包exmoudle
            {
                file: path.resolve(__dirname, './dist/index.esm.js'),
                format: 'es',
                name:'tracker'
            },
            // 打包common.js
            {
                file: path.resolve(__dirname, './dist/index.cjs.js'),
                format: 'cjs'
            },
            {
                file: path.resolve(__dirname, './dist/index.js'),
                format: 'umd',
                name: 'tracker'  // 同时支持umd,cmd,amd 依赖包可以注入全局 支持script引入
            }


        ],
        plugins: [
            ts()
        ]
    },
    {
        input: './src/core/index.ts',
        output:{
            file: path.resolve(__dirname, './dist/index.d.ts'),
            format: "es",
        },
        plugins: [dts()]
    }
]