import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'tu-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.css'],
  moduleId: module.id
})
export class TabPageComponent implements OnInit {
  @Input() component;
  @Input() selectedIndex;
  @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.component)
  
        let componentRef: any = this.container.createComponent(factory);

        componentRef.instance.selectedIndex = this.selectedIndex;
  }
}
