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

    {name: "Dell E5540", imageUrl:"https://laptopnhap.com/wp-content/uploads/2019/06/e5540_7_1.jpg", price: 4250, spec:" i5-4200U Notebook 39.6 cm 15.6 Intel® Core™ i5 4 GB DDR3L-SDRAM 500 GB Grey"},
    {name: "Lenovo E470" ,imageUrl:"https://s.pcformat.pl/g/a/uploads/4804/t1.jpg", price:4500, spec:" Intel Core i7 7500U 8GB 256GB SSD GT940MX Freedos 14"},
    {name:"Dell Latitude E3480", imageUrl:"https://m.media-amazon.com/images/I/91CtXV0PFdL._AC_SL1500_.jpg", price: 3500, spec:" Core i7 7500U, 8GB, 1TB, 2GB AMD Graphics 14 FHD"},
    
  ];

  hpPc : ProductModel[]=[
    {name: "HP ProBook 440 G6", imageUrl: "https://i0.shbdn.com/photos/56/72/99/x5_1049567299527.jpg", price: 5000, spec:"ProcessorIntel Core i7-8565U 4 x 1.8 - 4.6 GHz Intel Core i7 "},
    {name: "HP ZBook Firefly G7" , imageUrl: "https://d1x5sfejm3zc3e.cloudfront.net/catalog/product/3/B/3B0Y9LA-3_T1655309855.png", price:25000, spec: "Intel Core i7 10510U 16GB 512GB SSD Quadro P520 Freedos 14"},
    {name: "HP Folio 9470M", imageUrl:"https://i.ebayimg.com/00/s/ODUyWDExODE=/z/X5EAAOSwstJZSdsa/$_57.JPG?set_id=8800005007", price:3000, spec:"	Intel Core i5-3437U 4GB RAM 256GB SSD 	14 Inch Widescreen LED Backlit"},
    {name: "HP ZBook Firefly 16 G9 ", imageUrl:"https://1.bp.blogspot.com/-y_4N-L7mjdI/YUFwp9D3UPI/AAAAAAAAEdo/i-xFNXsTlCM58Dw0VIoT5ha05HdfaumQwCLcBGAsYHQ/s700/HP%2BZBOOK%2B2.png",price:22000, spec:"i7-1255U 64GB 1TBSSD T550 16 FullHD+ Touch"},
    {name: "HP EliteBook 840 G3", imageUrl:"https://avatars.mds.yandex.net/i?id=687730838afe64d19f60994b34569e3b-5685877-images-thumbs&n=13",price:4500, spec:"Intel Core i5-6300U 2 x 2.4 - 3 GHz, Skylake 8GB RAM 256SSD"},
    {name: "HP ProBook 640 G3", imageUrl:"https://i5.walmartimages.com/asr/6e0162ea-122d-4652-bf8c-6ce40160fe67.bed795c863de45474bfa355177b9e179.jpeg", price: 6000, spec:"Intel Core i5-7200U  Intel HD Graphics 620 256SSD "}
  ]

  dellPc : ProductModel[] = [
    {name: "Dell E5540", imageUrl:"https://laptopnhap.com/wp-content/uploads/2019/06/e5540_7_1.jpg", price: 4250, spec:" i5-4200U Notebook 39.6 cm 15.6 Intel® Core™ i5 4 GB DDR3L-SDRAM 500 GB Grey"},
    {name:"Dell Precision 5540", imageUrl:"https://avatars.mds.yandex.net/i?id=6c56c47ccb9a2bfb1f926006e94219b2-4888009-images-thumbs&n=13", price:17500,spec:"Intel Core i9-9980HK 8 x 2.4 - 5 GHz, Coffee Lake-H NVIDIA Quadro T2000" },
    {name:"Dell Latitude E7240 Touch", imageUrl:"https://images.wowcher.co.uk/images/deal/5370780/777x520/282996.jpg",price:6000, spec:"Core i7-4600U Çift Çekirdekli işlemci 4GB RAM 128GB SSD"},
    {name: "Dell E5540", imageUrl:"https://laptopnhap.com/wp-content/uploads/2019/06/e5540_7_1.jpg", price: 4250, spec:" i5-4200U Notebook 39.6 cm 15.6 Intel® Core™ i5 4 GB DDR3L-SDRAM 500 GB Grey"},
    {name:"Dell Precision 5540", imageUrl:"https://avatars.mds.yandex.net/i?id=6c56c47ccb9a2bfb1f926006e94219b2-4888009-images-thumbs&n=13", price:17500,spec:"Intel Core i9-9980HK 8 x 2.4 - 5 GHz, Coffee Lake-H NVIDIA Quadro T2000" },
    {name:"Dell Latitude E7240 Touch", imageUrl:"https://images.wowcher.co.uk/images/deal/5370780/777x520/282996.jpg",price:6000, spec:"Core i7-4600U Çift Çekirdekli işlemci 4GB RAM 128GB SSD"},
  
  ] 


  LenovoPc: ProductModel[] = [
    {name: "Lenovo E470" ,imageUrl:"https://s.pcformat.pl/g/a/uploads/4804/t1.jpg", price:4500, spec:" Intel Core i7 7500U 8GB 256GB SSD GT940MX Freedos 14"},
    {name: "Lenovo Yoga 510-14ISK", imageUrl:"https://avatars.mds.yandex.net/get-mpic/4397006/img_id2122921153592800344.jpeg/orig", price:5500, spec:"Intel Core i5-6200U 2 x 2.3 - 2.8 GHz, Skylake 8GB RAM 256GB SSD"},
    {name: "Lenovo E480", imageUrl:"https://www.notebookcheck-tr.com/uploads/tx_nbc2/LenovoThinkPadE480__1_.jpg",price: 4800, spec:"Lenovo ThinkPad E480 Intel Core i5 8250U 4GB 1TB Windows 10 Pro 14" },

  ]


}
