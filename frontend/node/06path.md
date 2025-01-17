# path 模块

要求：掌握

path 模块是 Node.js 中用于处理文件和目录路径的内置模块。它提供了一系列实用的方法来处理和转换文件路径。

主要用途：

1. 路径拼接和规范化
2. 获取路径中的文件名、扩展名、目录名等
3. 处理不同操作系统的路径分隔符
4. 解析相对路径和绝对路径

常用 API：

1. path.join() - 将多个路径片段连接成一个完整的路径
2. path.resolve() - 将相对路径解析为绝对路径
3. path.basename() - 获取路径中的文件名
4. path.dirname() - 获取路径中的目录名
5. path.extname() - 获取路径中的文件扩展名
6. path.parse() - 解析路径为一个对象，包含 root、dir、base、name、ext 等属性
7. path.sep - 获取操作系统特定的路径分隔符

学习目标：

- 掌握 path 模块的基本使用方法
- 理解路径处理的常见场景和解决方案
- 能在实际开发中正确处理文件路径相关的问题

## path.basename(path, [suffix])

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathbasenamepath-suffix
获取整个路径中最后的部分，第二个参数是可选的，如果传入第二个参数，则返回值不包含第二个参数

## path.sep

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathsep
表示路径分隔符

## path.delimiter

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathdelimiter
表示路径间的分隔符

## path.dirname(path)

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathdirnamepath
获取路径中的目录名

## path.extname(path)

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathextnamepath
获取路径中的文件扩展名

注意它不会检测文件是否存在，只是根据路径来进行处理

## path.join(path1, path2, ...)

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathjoinpaths
将多个路径片段连接成一个完整的路径，可以使用 `../` 或 `./` 来处理目录

## path.normalize(path)

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathnormalizepath
将路径规范化，处理路径中的 `..` 和 `.` 等特殊字符

## path.relative(from, to)

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathrelativefrom-to
获取后面路径相对于前面路径的相对路径

## path.resolve([...paths])

地址：https://nodejs.org/docs/v22.11.0/api/path.html#pathresolvepaths
将相对路径解析为绝对路径
