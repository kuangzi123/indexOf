/**
 * Created by Administrator on 2016/7/23 0023.
 */


String.prototype.myindexOf = function(str){
    var self = this.toString(),
        i=1,
        j=1;
    var sLen = self.length;
    var tLen = str.length;
    var next = [];
    next = getNext(str);
    while( i <= sLen && j <= tLen ){
        if(j == 0 || str[j] == self[i]){
            ++i;
            ++j;
        }else{
            j = next[j];
        }
    }
    if(j > tLen){
        return i-tLen-1;
    }else{
        return -1;
    }
};

var getNext = function(str){
    var i = 1,
        j = 0,
        nextArray = [],
        len = str.length;
    nextArray[1] = 0;
    while(i < len){
        if(j == 0 || str[j] == str[i]){
            ++i;
            ++j;
            nextArray[i] = j;
        }else{
            j = nextArray[j];
        }
    }
    return nextArray;
};
