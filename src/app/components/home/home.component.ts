import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products : ProductModel[] = [
    {name: "Lenovo E480", imageUrl:"https://www.notebookcheck-tr.com/uploads/tx_nbc2/LenovoThinkPadE480__1_.jpg",price: 4800, spec:"Lenovo ThinkPad E480 Intel Core i5 8250U 4GB 1TB Windows 10 Pro 14" },
    {
      name: "HP ProBook 440 G6", imageUrl: "https://i0.shbdn.com/photos/56/72/99/x5_1049567299527.jpg", price: 5000, spec:"ProcessorIntel Core i7-8565U 4 x 1.8 - 4.6 GHz Intel Core i7 "
    },
    {name: "HP ZBook Firefly G7" , imageUrl: "https://d1x5sfejm3zc3e.cloudfront.net/catalog/product/3/B/3B0Y9LA-3_T1655309855.png", price:25000, spec: "Intel Core i7 10510U 16GB 512GB SSD Quadro P520 Freedos 14"},

    {name: "Dell E5540", imageUrl:"https://supportkb.dell.com/img/ka02R000000Y5fGQAS/ka02R000000Y5fGQAS_tr_1.jpeg", price: 4250, spec:" i5-4200U Notebook 39.6 cm 15.6 Intel® Core™ i5 4 GB DDR3L-SDRAM 500 GB Grey"},
    {name: "Lenovo E470" ,imageUrl:"https://s.pcformat.pl/g/a/uploads/4804/t1.jpg", price:4500, spec:" Intel Core i7 7500U 8GB 256GB SSD GT940MX Freedos 14"},
    {name:"Dell Latitude E3480", imageUrl:"https://avatars.mds.yandex.net/i?id=54eb466180e2c5717465b36344e84689-5239038-images-thumbs&n=13", price: 3500, spec:" Core i7 7500U, 8GB, 1TB, 2GB AMD Graphics 14 FHD"},
    
  ];


}
