///**
// * Created by Administrator on 2017/3/27.
// */

// 百度地图API功能
var map = new BMap.Map("allmap");
//var point = new BMap.Point(116.331398,39.897445);  //实例化一个坐标
//map.centerAndZoom(point,20); //设置一个地图的中心点
var  mapStyle ={
    features: ["road", "building","water","land"],//隐藏地图上的poi
    style : "dark"  //设置地图风格为高端黑
};
map.setMapStyle(mapStyle);
//var geolocation = new BMap.Geolocation();
//geolocation.getCurrentPosition(function(r){
    //if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //    var mk = new BMap.Marker(r.point);
    //    //map.addOverlay(mk);
    //    //map.panTo(r.point);
    //    ////alert('您的位置：'+r.point.lng+','+r.point.lat);
    //    //point= new BMap.Point(r.point.lng, r.point.lat);
    //  //  map.centerAndZoom(point,18);
    //   // var marker = new BMap.Marker(point);  // 创建标注
    //    //map.addOverlay(marker);              // 将标注添加到地图中
    //   // map.panTo(point);
    //    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    //
    //}
    //else {
    //    alert('failed'+this.getStatus());
    //}
//},{enableHighAccuracy: true});
map.addControl(new BMap.NavigationControl());        // 添加平移缩放控件
map.addControl(new BMap.ScaleControl());             // 添加比例尺控件
map.enableScrollWheelZoom();                         //启用滚轮放大缩小
map.disable3DBuilding();
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上,并调整地图视野
myGeo.getPoint("上海市浦东新区6号线蓝村路", function(point){
    //var point = new BMap.Point(116.331398,39.897445);
    if (point) {
     var center=new BMap.Point(point.lng+0.002945,point.lat-0.0005);
        map.centerAndZoom(center,20); //中心点
        //map.addOverlay(new BMap.Marker(point)); //标记点
        var myIcon = new BMap.Icon("../img/about/map-marker.png", new BMap.Size(50, 125), {
            offset: new BMap.Size(10, 25) // 指定定位位置
        });
        var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(center);

            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    }else{
        alert("您选择地址没有解析到结果!");
    }
}, "上海市");



