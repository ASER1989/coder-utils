/*
* 将文件流导出为Excel
* response:接口响应的文件流
* fileName:导出的文件名称
* */
export const exportExcel = function (response, fileName) {
    let excelName = fileName == null ? +new Date() : fileName;
    excelName = (excelName.indexOf(".xls") > 0 || excelName.indexOf(".xlsx") > 0) ? excelName : excelName + ".xlsx";
    let blob = new Blob([resp])
    let downloadElement = document.createElement('a');
    let href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = excelName; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
}