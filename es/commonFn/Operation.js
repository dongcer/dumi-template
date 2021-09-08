// 动态计算表格的高度
// dom可为表格dom元素or父级元素（注意：父级元素与表格元素之间距离为0，防止计算有误）
// num 为表格下的分页或其他区域部分的高度，没有为0
var getTableScroll = function getTableScroll(dom, num) {
  var tHeaderTop = dom.current.getBoundingClientRect().top; // 头部高度

  var tHeaderHeight = dom.current.querySelector('.ant-table-header').clientHeight; // 分页部分高度

  var paginationHeight = num;
  var Y = "calc(100vh - ".concat(tHeaderTop + tHeaderHeight + paginationHeight, "px)");
  return Y;
};

export { getTableScroll };