'use strict';module.exports = function (widget) {    var href = '/stat#?dataSourceIds=';    switch(widget.type){        case 1:        case 2:        case 5:            href += widget.config.dataInfos.map(function(dataInfo){                return dataInfo.id;            }).join(',');            break;        case 3:        case 4:            href += widget.config.dataSourceId;            break;        default:            break;    }    return href;};