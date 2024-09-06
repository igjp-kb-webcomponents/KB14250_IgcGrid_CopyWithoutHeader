import "./style.css";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "@infragistics/igniteui-webcomponents-grids/grids/themes/light/bootstrap.css";
import "@infragistics/igniteui-webcomponents-grids/grids/combined.js";
import "@webcomponents/custom-elements/custom-elements.min";
import "@webcomponents/custom-elements/src/native-shim.js";

import { IgcClipboardOptions, IgcGridComponent } from "@infragistics/igniteui-webcomponents-grids/grids";

const sampleData = [
  { id: 1, name: "ボブ", age: 30, jobTitle: "開発者" },
  { id: 2, name: "アリス", age: 25, jobTitle: "サポート" },
  { id: 3, name: "ジョン", age: 40, jobTitle: "マネージャー" },
  { id: 4, name: "エミリー", age: 35, jobTitle: "マーケティング" },
  { id: 5, name: "デイビッド", age: 28, jobTitle: "営業" },
];

const clipboardOptions: IgcClipboardOptions = {
  enabled: true,
  copyHeaders: false,
  copyFormatters: true,
  separator: "\t",
};

const grid = document.querySelector("#grid1") as IgcGridComponent;
grid.data = sampleData;
grid.clipboardOptions = clipboardOptions;
