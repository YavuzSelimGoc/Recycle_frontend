import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
category:Category[]
  constructor(private categoryService:CategoryService) { }
  ngOnInit(): void {
    this.getCategory()
  }
  getCategory() {
    this.categoryService.getCategory().subscribe(repsonse => {

      this.category = repsonse.data  
  
    })
  }
}
