(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{249:function(t,r,e){"use strict";e.r(r);var a=e(28),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"全家回檔找不到檔案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全家回檔找不到檔案"}},[t._v("#")]),t._v(" 全家回檔找不到檔案")]),t._v(" "),e("h2",{attrs:{id:"問題描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#問題描述"}},[t._v("#")]),t._v(" 問題描述")]),t._v(" "),e("p",[t._v("全家FTP回檔有時會找不到檔案、連線失敗")]),t._v(" "),e("h2",{attrs:{id:"處理方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#處理方式"}},[t._v("#")]),t._v(" 處理方式")]),t._v(" "),e("ul",[e("li",[t._v("先嘗試連全家的FTP查看連線是否穩定，如果不穩定可以回報給全家業務 Jean")]),t._v(" "),e("li",[t._v("檢查該回檔的狀態資料是否有更新 shipment_attributes 資料表(用來記錄各個訂單的包裹狀態)")]),t._v(" "),e("li",[t._v("由於程式執行如果失敗會把檔案移到FTP的Err資料夾，所以再把該檔案移到Work資料夾")]),t._v(" "),e("li",[t._v("到 HenryController 中的 checkMissSchedule方法更改日期及狀態類型重新執行，如果遇到資料夾權限不足，可以去更改資料夾權限再重新執行")])])])}),[],!1,null,null,null);r.default=s.exports}}]);