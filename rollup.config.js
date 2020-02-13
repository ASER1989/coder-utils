import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'

export default {
    input: 'index.js',
    plugins: [
        resolve({
            jsnext: true,  // 该属性是指定将Node包转换为ES2015模块
            // main 和 browser 属性将使插件决定将那些文件应用到bundle中
            main: true,  // Default: true
            browser: true // Default: false
        }),
        commonjs({}),
        babel({
            exclude: 'node_modules/**',  // 排除node_modules 下的文件
            runtimeHelpers: true
        }),
        // replace({
        //     include: 'src/index.js', // 指定可以使用变量的文件路径
        //     exclude: 'node_modules/**',
        //     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        //     HOST: JSON.stringify('http://111/111')
        // })
    ],
    output: [
        {
            file: 'dist/index.js',
            name: 'SongPackage',
            format: 'umd'
        }, {
            file: 'dist/index.es.js',
            format: 'es'
        }, {
            file: 'dist/index.amd.js',
            format: 'amd'
        }, {
            file: 'dist/index.cjs.js',
            format: 'cjs'
        }]
};